// Configurações gerais do site. Mudar aqui muda em todas as páginas.

export const SITE = {
  nome: 'Incorion',
  url: 'https://incorion.com.br',
  slogan: 'A incorporação inteira, em uma plataforma.',
  descricao:
    'Gestão completa para incorporadoras e construtoras, do terreno às chaves. Com o Leo, a IA do mercado imobiliário.',
  email: 'contato@incorion.com.br',
};

// Nome PROVISÓRIO do módulo de corretores.
// Quando o nome definitivo for escolhido, troque só esta linha.
export const MODULO_CORRETORES = 'Incorion Corretores';

export const MODULOS = [
  { nome: 'Financeiro', texto: 'Contas a pagar e a receber, fluxo de caixa e conciliação bancária por obra e por empresa.' },
  { nome: 'Orçamento', texto: 'Orçamento da obra por etapa, com o previsto e o realizado lado a lado.' },
  { nome: 'Compras', texto: 'Cotação, pedido e entrega, com a lista de materiais saindo direto do projeto.' },
  { nome: 'Obras', texto: 'Diário de obra, cronograma e avanço físico, com fotos e registros da equipe.' },
  { nome: 'Comercial', texto: 'Estoque de unidades, tabela de vendas, reservas e propostas.' },
  { nome: MODULO_CORRETORES, texto: 'Portal para os corretores parceiros consultarem o estoque, reservarem e enviarem propostas.' },
  { nome: 'Contratos', texto: 'Contratos de venda, aditivos e distratos, com a carteira de recebíveis.' },
  { nome: 'Pós-obra', texto: 'Chamados de assistência técnica e garantia depois da entrega das chaves.' },
  { nome: 'Investidores', texto: 'Relatórios e acompanhamento para sócios e investidores de cada empreendimento.' },
];

export const NAV = [
  { href: '/#plataforma', label: 'Plataforma' },
  { href: '/#leo', label: 'Leo' },
  { href: '/blog', label: 'Blog' },
];
