// Configurações gerais do site. Mudar aqui muda em todas as páginas.
// Todos os nomes de obras, fornecedores e valores do site são ILUSTRATIVOS (fictícios).

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

export const NAV = [
  { href: '/#plataforma', label: 'Plataforma' },
  { href: '/#leo', label: 'Leo' },
  { href: '/blog', label: 'Blog' },
];
