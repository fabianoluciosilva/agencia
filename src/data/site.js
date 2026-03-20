// src/data/site.js
// Centralized site data — easy to update

export const SITE = {
  name: 'Inamob Negócios Digitais',
  tagline: 'Marketing Digital Imobiliário de Alta Performance',
  description:
    'Agência especializada em marketing digital para incorporadoras, construtoras e imobiliárias no Rio de Janeiro. Geração de leads qualificados, branding e presença digital que vende.',
  phone: '+5521999999999', // ATUALIZAR
  phoneDisplay: '(21) 9 9999-9999', // ATUALIZAR
  email: 'contato@inamob.com.br',
  whatsapp: '5521999999999', // ATUALIZAR — somente números
  whatsappMsg: 'Olá! Vi o site da Inamob e gostaria de saber mais sobre as soluções de marketing digital imobiliário.',
  cnpj: '00.000.000/0001-00', // ATUALIZAR
  address: 'Rio de Janeiro, RJ',
  instagram: 'https://instagram.com/inamob', // ATUALIZAR
  linkedin: 'https://linkedin.com/company/inamob', // ATUALIZAR
}

export const SERVICES = [
  {
    icon: '🏗️',
    title: 'Marketing para Lançamentos',
    subtitle: 'Incorporadoras & Construtoras',
    desc: 'Estratégia completa de pré-lançamento, lançamento e pós-lançamento. Funis de venda, mídia paga e CRM para maximizar a velocidade de vendas.',
    tags: ['Google Ads', 'Meta Ads', 'CRM', 'Landing Pages'],
    highlight: true,
  },
  {
    icon: '🎯',
    title: 'Geração de Leads Qualificados',
    subtitle: 'Alta conversão B2B e B2C',
    desc: 'Tráfego pago altamente segmentado para atrair compradores e investidores com intenção real de compra. Leads exclusivos, sem divisão.',
    tags: ['Google Ads', 'Meta Ads', 'Remarketing', 'Segmentação'],
    highlight: false,
  },
  {
    icon: '🌐',
    title: 'Sites & Landing Pages',
    subtitle: 'Conversão é prioridade',
    desc: 'Desenvolvimento de sites institucionais e hotsite de empreendimentos com foco em SEO, velocidade e conversão. Design premium que posiciona sua marca.',
    tags: ['Next.js', 'SEO Técnico', 'UX/UI', 'Performance'],
    highlight: false,
  },
  {
    icon: '📱',
    title: 'Gestão de Redes Sociais',
    subtitle: 'Presença que gera autoridade',
    desc: 'Conteúdo estratégico para Instagram, LinkedIn e YouTube. Posicionamento de marca, lançamentos orgânicos e comunidade engajada.',
    tags: ['Instagram', 'LinkedIn', 'Reels', 'YouTube'],
    highlight: false,
  },
  {
    icon: '🔍',
    title: 'SEO & Conteúdo Imobiliário',
    subtitle: 'Visibilidade orgânica duradoura',
    desc: 'Estratégia de SEO especializada no mercado imobiliário. Artigos, blog e otimizações técnicas que colocam sua empresa no topo das buscas.',
    tags: ['SEO Local', 'Blog', 'Google Meu Negócio', 'Palavras-chave'],
    highlight: false,
  },
  {
    icon: '📊',
    title: 'Inteligência & Analytics',
    subtitle: 'Dados que orientam decisões',
    desc: 'Dashboards em tempo real, relatórios de performance, funis de conversão e análise de concorrência para maximizar o ROI das suas campanhas.',
    tags: ['GA4', 'Meta Pixel', 'Looker Studio', 'ROI'],
    highlight: false,
  },
]

export const STATS = [
  { value: '8+', label: 'Anos de experiência', desc: 'No mercado imobiliário digital' },
  { value: '180+', label: 'Empreendimentos', desc: 'Lançados e comercializados' },
  { value: 'R$2bi+', label: 'Em imóveis vendidos', desc: 'Gerados pelas nossas campanhas' },
  { value: '98%', label: 'Satisfação', desc: 'Dos nossos clientes' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu mercado, concorrência, posicionamento atual e potencial de crescimento. Entregamos um relatório personalizado sem compromisso.',
  },
  {
    step: '02',
    title: 'Estratégia Sob Medida',
    desc: 'Desenhamos um plano de marketing exclusivo para seu segmento: incorporadora, construtora ou imobiliária. Cada solução é única.',
  },
  {
    step: '03',
    title: 'Execução com Precisão',
    desc: 'Nossa equipe especializada coloca a estratégia em ação — campanhas, conteúdo, site e automações — com agilidade e rigor técnico.',
  },
  {
    step: '04',
    title: 'Crescimento Mensurável',
    desc: 'Acompanhe os resultados em dashboards em tempo real. Otimizamos continuamente para maximizar leads qualificados e ROI.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Rafael Drummond',
    role: 'Diretor Comercial',
    company: 'Construtora VRD',
    text: 'A Inamob transformou nosso processo de vendas. Os leads chegam qualificados e nossa equipe comercial fecha com muito mais facilidade. ROI acima do esperado.',
    stars: 5,
  },
  {
    name: 'Juliana Castro',
    role: 'Sócia-diretora',
    company: 'Imobiliária Solaris RJ',
    text: 'Em 4 meses triplicamos a geração de leads orgânicos. O trabalho de SEO e conteúdo foi cirúrgico. Hoje somos referência em buscas no nosso segmento.',
    stars: 5,
  },
  {
    name: 'Marcelo Fontes',
    role: 'CEO',
    company: 'Grupo Patentes Incorporações',
    text: 'Parceria estratégica real. A equipe entende o mercado imobiliário como ninguém. O lançamento do nosso último empreendimento bateu o recorde de reservas em 48h.',
    stars: 5,
  },
]

export const FAQ = [
  {
    q: 'Vocês atendem apenas imobiliárias ou também incorporadoras?',
    a: 'Atendemos todo o ecossistema imobiliário: incorporadoras, construtoras, imobiliárias, loteadoras e corretores autônomos com equipe. Nossa especialidade é o mercado de médio e alto padrão.',
  },
  {
    q: 'Qual o investimento mínimo para começar?',
    a: 'Nossos planos começam a partir de R$2.500/mês para gestão de tráfego pago, com verba de mídia separada. Para estratégias completas com site, SEO e social media, montamos pacotes sob medida.',
  },
  {
    q: 'Em quanto tempo vejo resultados?',
    a: 'Campanhas de tráfego pago geram leads desde a primeira semana. SEO e conteúdo têm resultado crescente em 3 a 6 meses. Nosso compromisso é com crescimento consistente e sustentável.',
  },
  {
    q: 'Vocês entregam relatórios de performance?',
    a: 'Sim. Cada cliente tem acesso a um dashboard personalizado em tempo real e recebe relatório mensal detalhado com métricas de campanhas, leads gerados, custo por lead e ROI.',
  },
  {
    q: 'Vocês criam o site do empreendimento também?',
    a: 'Sim! Desenvolvemos hotsites de lançamento, landing pages de alta conversão e sites institucionais com SEO técnico avançado. Tudo integrado com as campanhas de mídia paga.',
  },
]

export const CLIENTS = [
  'Construtora VRD',
  'Imobiliária Solaris',
  'Grupo Patentes',
  'Prime Incorporações',
  'CasaCerta RJ',
  'Atlântico Empreendimentos',
]

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]
