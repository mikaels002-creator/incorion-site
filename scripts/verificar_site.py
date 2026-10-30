# Verificações do site gerado (dist/): links, rascunhos fora do ar, títulos, alt das imagens e mídias dos posts.
# Uso: python3 scripts/verificar_site.py .   (depois de npm run build)
import os, re, sys, glob
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote

ROOT = sys.argv[1]
DIST = os.path.join(ROOT, 'dist')
results = []
def rec(name, ok, detail=''):
    results.append((name, ok, detail))

class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.refs=[]; s.h1=0; s.title=0; s.desc=[]; s.canon=[]; s.robots=[]; s.imgs_noalt=[]; s.in_title=False; s.title_txt=''
    def handle_starttag(s, tag, a):
        a = dict(a)
        for k in ('href','src','poster'):
            if k in a and a[k] is not None: s.refs.append((tag,k,a[k]))
        if 'srcset' in a and a['srcset']:
            for part in a['srcset'].split(','):
                u = part.strip().split(' ')[0]
                if u: s.refs.append((tag,'srcset',u))
        if tag=='h1': s.h1+=1
        if tag=='title': s.title+=1; s.in_title=True
        if tag=='meta' and a.get('name')=='description': s.desc.append(a.get('content') or '')
        if tag=='meta' and a.get('name')=='robots': s.robots.append(a.get('content') or '')
        if tag=='link' and a.get('rel')=='canonical': s.canon.append(a.get('href') or '')
        if tag=='img' and ('alt' not in a or a['alt'] is None): s.imgs_noalt.append(a.get('src'))
    def handle_endtag(s, tag):
        if tag=='title': s.in_title=False
    def handle_data(s, d):
        if s.in_title: s.title_txt+=d

def resolve(u, page):
    p = urlparse(u)
    if p.scheme in ('mailto','tel','javascript','data') : return None
    if p.scheme in ('http','https'):
        if p.netloc not in ('incorion.com.br','www.incorion.com.br'): return None
    path = unquote(p.path)
    if path == '' : return 'SELF'
    if not path.startswith('/'):
        path = os.path.normpath(os.path.join(os.path.dirname('/'+os.path.relpath(page, DIST)), path))
    if path == '/': return [os.path.join(DIST,'index.html')]
    rel = path.lstrip('/')
    return [os.path.join(DIST, rel), os.path.join(DIST, rel + '.html'), os.path.join(DIST, rel, 'index.html')]

pages = sorted(glob.glob(os.path.join(DIST,'**','*.html'), recursive=True))
parsed = {}
broken=[]; meta_issues=[]; alt_issues=[]
for pg in pages:
    p = P(); p.feed(open(pg,encoding='utf-8').read()); parsed[pg]=p
    for tag,k,u in p.refs:
        r = resolve(u, pg)
        if r is None or r=='SELF': continue
        if not any(os.path.isfile(c) for c in r):
            broken.append(f'{os.path.relpath(pg,DIST)}: <{tag} {k}="{u}">')
    name = os.path.relpath(pg,DIST)
    probs=[]
    if p.h1!=1: probs.append(f'h1={p.h1}')
    if p.title!=1 or not p.title_txt.strip(): probs.append('title ausente')
    if len(p.desc)!=1 or not p.desc[0].strip(): probs.append(f'description={p.desc}')
    sem_indice = any('noindex' in r for r in p.robots)
    if name!='404.html' and not sem_indice:
        if len(p.canon)!=1: probs.append(f'canonical={p.canon}')
        elif '.html' in p.canon[0]: probs.append(f'canonical com .html: {p.canon[0]}')
    else:
        if p.canon and '.html' in p.canon[0]: probs.append(f'canonical com .html: {p.canon[0]}')
    if probs: meta_issues.append(f'{name}: '+'; '.join(probs))
    for s in p.imgs_noalt: alt_issues.append(f'{name}: img sem alt src={s}')

rec('A3 links/src internos existem em dist', not broken, '\n'.join(sorted(set(broken))) or f'{len(pages)} paginas verificadas')
rec('A5 h1 unico, title, description, canonical sem .html', not meta_issues, '\n'.join(meta_issues) or 'ok')
rec('A6 toda <img> tem alt', not alt_issues, '\n'.join(alt_issues) or 'ok')

# drafts
fm_re = re.compile(r'^---\n(.*?)\n---', re.S)
drafts=[]; media=[]
for md in glob.glob(os.path.join(ROOT,'src/content/blog/*.md')):
    slug = os.path.splitext(os.path.basename(md))[0]
    fm = fm_re.match(open(md,encoding='utf-8').read()).group(1)
    d = dict(re.findall(r'^(\w+):\s*(.*)$', fm, re.M))
    d = {k:v.strip().strip('"') for k,v in d.items()}
    import datetime
    futuro = d.get('data','') > datetime.date.today().isoformat()
    if d.get('rascunho')=='true' or futuro: drafts.append((slug,d))
    for k in ('capa','audio','video'):
        if d.get(k): media.append((slug,k,d[k]))
dprobs=[]
sitemap = ''.join(open(f).read() for f in glob.glob(os.path.join(DIST,'sitemap*.xml')))
for slug,d in drafts:
    for f in ('blog.html','index.html'):
        txt = open(os.path.join(DIST,f),encoding='utf-8').read()
        if f'/blog/{slug}' in txt or d['titulo'] in txt: dprobs.append(f'{slug} aparece em {f}')
    if os.path.exists(os.path.join(DIST,'blog',slug+'.html')) or os.path.isdir(os.path.join(DIST,'blog',slug)): dprobs.append(f'{slug} gerado em dist/blog/')
    if slug in sitemap: dprobs.append(f'{slug} no sitemap')
    pv = os.path.join(DIST,'previa',slug+'.html')
    if not os.path.exists(pv): dprobs.append(f'{slug} sem previa')
    else:
        rb = parsed[pv].robots
        if not any('noindex' in r for r in rb): dprobs.append(f'{slug} previa sem noindex (robots={rb})')
    if '/previa/' in sitemap: dprobs.append('previa no sitemap')
rec(f'A4 rascunhos ({len(drafts)}) fora do site publico e em /previa com noindex', not dprobs, '\n'.join(dprobs) or ', '.join(s for s,_ in drafts))
missing=[f'{s} {k}={v}' for s,k,v in media if not os.path.isfile(os.path.join(ROOT,'public',v.lstrip('/')))]
rec(f'A7 midias do frontmatter existem em public/ ({len(media)})', not missing, '\n'.join(missing) or 'ok')

for n,ok,d in results:
    print(('PASS' if ok else 'FAIL'), n); print('   ', d.replace('\n','\n    '))
sys.exit(0 if all(ok for _,ok,_ in results) else 1)
