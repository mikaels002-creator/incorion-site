// Configurações gerais do site. Mudar aqui muda em todas as páginas.
// Todos os nomes de obras, fornecedores e valores do site são ILUSTRATIVOS (fictícios).

export const SITE = {
  nome: 'Incorion',
  url: 'https://incorion.com.br',
  slogan: 'A incorporação inteira, em uma plataforma.',
  descricao:
    'Gestão completa para incorporadoras e construtoras, do terreno às chaves. Com o Leo, a IA do mercado imobiliário.',
  email: 'contato@incorion.com.br',
  // Número do WhatsApp da Incorion, só dígitos com DDI e DDD (ex.: '5547999990000').
  // Enquanto estiver vazio, o botão flutuante do WhatsApp não aparece.
  whatsapp: '',
};

// Fotos gratuitas da Unsplash (licença Unsplash, uso comercial liberado). Trocar pelas nossas depois.
export const FOTOS = {
  predio: { id: 'photo-1737893887080-613dd698dada', autor: 'Garvit Nama', alt: 'Prédio em construção ao pôr do sol' },
  laje: { id: 'photo-1751054554594-85de2fe63e6b', autor: 'John Kakuk', alt: 'Guindaste içando uma laje de concreto' },
  grua: { id: 'photo-1741916541573-c5881194475f', autor: 'Salvador Rios', alt: 'Grua no alto de um prédio em obra' },
  reuniao: { id: 'photo-1630487656049-6db93a53a7e9', autor: 'Andreea Avramescu', alt: 'Equipe revisando documentos em uma mesa' },
  operario: { id: 'photo-1640236890278-823b8baec180', autor: 'Heri Susilo', alt: 'Operário de capacete e colete na obra' },
  chave: { id: 'photo-1735547876935-7be80eae1c88', autor: 'Jakub Żerdzicki', alt: 'Mão segurando a chave de um apartamento' },
  fachada: { id: 'photo-1758193431351-68538bf55ec3', autor: 'Aalo Lens', alt: 'Fachada de um prédio residencial moderno' },
  entrega: { id: 'photo-1758523671285-9ff3f4e0ff38', autor: 'Vitaly Gariev', alt: 'Casal recebendo as chaves do novo apartamento' },
};
export const foto = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;

// Nome PROVISÓRIO do módulo de corretores.
// Quando o nome definitivo for escolhido, troque só esta linha.
export const MODULO_CORRETORES = 'Incorion Corretores';

export const MODULOS = [
  {
    nome: 'Financeiro',
    texto: 'Contas a pagar e a receber, fluxo de caixa e conciliação com o extrato, por obra e por empresa.',
    tela: 'Fluxo de caixa · outubro',
    linhas: [['Entradas', 'R$ 1.284.000'], ['Saídas', 'R$ 962.450'], ['Saldo do mês', 'R$ 321.550']],
  },
  {
    nome: 'Orçamento',
    texto: 'O orçamento da obra por etapa, com o previsto e o realizado lado a lado.',
    tela: 'Estrutura · previsto x realizado',
    linhas: [['Previsto', 'R$ 2.400.000'], ['Realizado', 'R$ 1.536.000'], ['Avanço', '64%']],
  },
  {
    nome: 'Compras',
    texto: 'Cotação, pedido e entrega, com a lista de materiais saindo do projeto.',
    tela: 'Cotação · aço CA-50',
    linhas: [['Fornecedor A', 'R$ 6,82/kg'], ['Fornecedor B', 'R$ 6,95/kg'], ['Fornecedor C', 'R$ 7,10/kg']],
  },
  {
    nome: 'Obras',
    texto: 'Diário de obra, cronograma e avanço físico, com as fotos e os áudios da equipe.',
    tela: 'Diário de obra · hoje',
    linhas: [['Concretagem', '6ª laje'], ['Equipe em campo', '23 pessoas'], ['Clima', 'Sol, 27 °C']],
  },
  {
    nome: 'Comercial',
    texto: 'Estoque de unidades, tabela de vendas, reservas e propostas.',
    tela: 'Vendas · Torre A',
    linhas: [['Vendidas', '19 de 32'], ['Reservadas', '4'], ['Livres', '9']],
  },
  {
    nome: MODULO_CORRETORES,
    texto: 'Portal para os corretores parceiros verem o estoque, reservarem e mandarem propostas.',
    tela: 'Corretores parceiros',
    linhas: [['Imobiliárias', '12'], ['Corretores ativos', '87'], ['Propostas no mês', '31']],
  },
  {
    nome: 'Contratos',
    texto: 'Contratos de venda, aditivos e distratos, com a carteira de recebíveis.',
    tela: 'Carteira de recebíveis',
    linhas: [['A receber', 'R$ 8.940.000'], ['Parcelas em dia', '96%'], ['Vencendo na semana', '14']],
  },
  {
    nome: 'Pós-obra',
    texto: 'Chamados de assistência técnica e garantia depois da entrega das chaves.',
    tela: 'Chamados abertos',
    linhas: [['Infiltração · 304', 'Visita 24/10'], ['Porta · 1102', 'Em reparo'], ['Elétrica · 801', 'Concluído']],
  },
  {
    nome: 'Investidores',
    texto: 'Relatórios e acompanhamento para sócios e investidores de cada empreendimento.',
    tela: 'Relatório do trimestre',
    linhas: [['VGV', 'R$ 38.400.000'], ['Vendido', '59%'], ['Obra', '64% concluída']],
  },
];

export const PERFIS = [
  {
    slug: 'incorporadoras',
    nome: 'Incorporadoras',
    foto: 'reuniao',
    resumo: 'Do estudo do terreno à entrega das chaves, com o caixa de cada empreendimento sob controle.',
    titulo: 'Gestão completa para incorporadoras',
    texto: 'Acompanhe cada empreendimento do terreno às chaves: viabilidade, orçamento, obra, vendas, contratos e o caixa de cada SPE, no mesmo sistema.',
    dores: [
      ['Caixa por empreendimento', 'Contas a pagar e a receber separadas por SPE e por obra, com o fluxo de caixa sempre atualizado.'],
      ['Vendas e recebíveis', 'Estoque de unidades, tabela de vendas, contratos e a carteira de recebíveis em um lugar só.'],
      ['Sócios e investidores', 'Relatórios prontos para quem investiu, sem montar planilha no fim de cada mês.'],
    ],
    modulos: ['Financeiro', 'Comercial', 'Contratos', 'Investidores'],
  },
  {
    slug: 'construtoras',
    nome: 'Construtoras',
    foto: 'operario',
    resumo: 'Orçamento, compras e diário de obra conectados, para a obra andar no prazo e no custo.',
    titulo: 'Gestão de obras para construtoras',
    texto: 'Do orçamento à entrega: compras, medições, diário de obra e o custo de cada etapa, com a equipe de campo e o escritório falando a mesma língua.',
    dores: [
      ['Previsto x realizado', 'O orçamento da obra por etapa, comparado com o que já foi gasto, a cada compra e a cada pagamento.'],
      ['Compras sem retrabalho', 'Cotação, pedido e entrega, com a lista de materiais saindo direto do projeto.'],
      ['Campo e escritório juntos', 'Diário de obra com as fotos e os áudios da equipe, que o Leo organiza a partir do WhatsApp.'],
    ],
    modulos: ['Orçamento', 'Compras', 'Obras', 'Financeiro'],
  },
  {
    slug: 'corretores',
    nome: 'Corretores e imobiliárias',
    foto: 'chave',
    resumo: 'Estoque ao vivo, reserva pelo celular e proposta enviada sem planilha nem troca de e-mail.',
    titulo: 'Portal para corretores e imobiliárias parceiras',
    texto: 'Seus corretores parceiros veem o estoque ao vivo, reservam a unidade pelo celular e mandam a proposta. A incorporadora acompanha tudo e o Leo avisa a equipe.',
    dores: [
      ['Estoque sempre certo', 'O espelho de vendas se atualiza a cada venda e a cada reserva. Ninguém vende a mesma unidade duas vezes.'],
      ['Reserva com prazo', 'O corretor reserva por 48 horas e a reserva vence sozinha se a proposta não vier.'],
      ['Tabela atualizada', 'Reajuste a tabela de uma vez e todos os corretores veem o preço novo na mesma hora.'],
    ],
    modulos: ['Comercial', MODULO_CORRETORES, 'Contratos'],
  },
];

export const FAQ = [
  ['O que é a Incorion?', 'É uma plataforma de gestão feita para incorporadoras e construtoras. Ela junta financeiro, orçamento, compras, obras, vendas, contratos, pós-obra e investidores em um sistema só, do terreno às chaves.'],
  ['O que o Leo faz?', 'O Leo é a inteligência artificial da Incorion, especializada no mercado imobiliário. Ele trabalha no WhatsApp: lê os grupos da obra, lança contas, cobra prazos, pede aprovações e avisa a equipe. É um módulo à parte, contratado junto com a plataforma.'],
  ['Preciso contratar todos os módulos?', 'Não. Você começa pelo módulo que mais faz falta hoje e liga os outros quando quiser. Todos conversam entre si.'],
  ['Serve para empresas pequenas?', 'Sim. A Incorion atende desde a incorporadora com um empreendimento até grupos com várias SPEs e obras ao mesmo tempo.'],
  ['Funciona no celular?', 'Sim. O sistema funciona no computador e no celular, e boa parte do dia a dia pode ser feita direto pelo WhatsApp, com o Leo.'],
  ['Meus corretores parceiros também usam?', `Sim. Com o ${MODULO_CORRETORES}, os corretores e as imobiliárias parceiras veem o estoque, reservam unidades e mandam propostas, cada um só com o que pode ver.`],
  ['Como é a implantação?', 'Nossa equipe acompanha a implantação junto com a sua: cadastro das empresas e obras, importação dos dados e treinamento de quem vai usar.'],
  ['Quando posso começar?', 'A Incorion está abrindo para as primeiras incorporadoras. Solicite uma demonstração e a nossa equipe entra em contato.'],
];

export const NAV = [
  { href: '/#modulos', label: 'Soluções', sub: MODULOS.map((m) => ({ href: '/#modulos', label: m.nome })) },
  { href: '/#perfis', label: 'Para quem', sub: PERFIS.map((p) => ({ href: `/${p.slug}`, label: p.nome })) },
  { href: '/#leo', label: 'Leo IA' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
];
