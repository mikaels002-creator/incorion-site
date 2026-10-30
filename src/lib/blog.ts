// Regras do blog usadas em todas as páginas: o que está publicado, foto padrão e formato de data.
import { getCollection, type CollectionEntry } from 'astro:content';
import { FOTOS, foto } from '../config';

export type Post = CollectionEntry<'blog'>;

// Publicado = aprovado (rascunho: false) e com a data já chegada.
// Post aprovado com data futura fica agendado: entra no ar sozinho na publicação do dia (robô de terça).
export async function postsPublicados(): Promise<Post[]> {
  const agora = Date.now();
  const posts = await getCollection('blog', ({ data }) => !data.rascunho && data.data.valueOf() <= agora);
  return posts.sort((a, b) => b.data.data.valueOf() - a.data.data.valueOf());
}

// Prévia = tudo que ainda não está publicado (rascunho ou agendado).
export async function postsEmPrevia(): Promise<Post[]> {
  const agora = Date.now();
  return getCollection('blog', ({ data }) => data.rascunho || data.data.valueOf() > agora);
}

const FOTO_CATEGORIA: Record<string, keyof typeof FOTOS> = {
  'Novidades': 'predio', 'Gestão': 'laje', 'Mercado e crédito': 'fachada', 'Corretores': 'entrega', 'Leo': 'grua',
};

export function capaDoPost(p: Post, largura = 1100, altura = 700) {
  const f = FOTOS[FOTO_CATEGORIA[p.data.categoria] ?? 'predio'];
  return { src: p.data.capa ?? foto(f.id, largura, altura), alt: p.data.capaAlt ?? f.alt };
}

// Datas dos posts são dias (sem hora): formata em UTC para não "voltar" um dia no fuso do Brasil.
export const dataDoPost = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
