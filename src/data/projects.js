import { localize } from '../i18n.js'

export const projectCategories = [
  { id: 'all', label: 'Todos', en: { label: 'All' } },
  { id: 'site', label: 'Sites', en: { label: 'Websites' } },
  { id: 'landing-page', label: 'Landing pages', en: { label: 'Landing pages' } },
  { id: 'web-app', label: 'Aplicações web', en: { label: 'Web apps' } },
].map(localize)

// Imagens dos projetos: salve em public/images/projects.
// Use imageFit: 'contain' para mostrar a imagem inteira sem cortes.
// Use imageFit: 'cover' para preencher todo o card (pode haver recorte).
// Em imagePosition, escolha: 'center', 'top', 'bottom', 'left' ou 'right'.
// Use hidden: true para esconder um projeto que ainda não está pronto.
// O campo en guarda a versão em inglês (type, description, imageAlt).
// Cole o endereço publicado de cada trabalho em demoUrl.
// Exemplo: demoUrl: 'https://meu-projeto.pages.dev'
export const projects = [
  //Sites quantidade (04)
  {
    id: 'fbi-nutrition',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'FBI Nutrition',
    type: 'E-commerce de suplementos',
    description:'Loja virtual responsiva para apresentar suplementos, destacar ofertas e facilitar a jornada de compra.',
    category: 'site',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/ecommerce-suplementos-hero.webp',
    imageAlt: 'Página inicial da loja FBI Nutrition com suplementos esportivos',
    imageFit: 'contain',
    imagePosition: 'center',
    visual: 'finance',
    featured: true,
    demoUrl: '',
    repositoryUrl: '',
    en: {
      type: 'Supplement e-commerce',
      description:
        'Responsive online store to showcase supplements, highlight deals and make the buying journey easier.',
      imageAlt: 'Home page of the FBI Nutrition store with sports supplements',
    },
  },
  {
    id: 'guarda municipal',
    title: 'Guarda Municipal',
    type: 'Site institucional',
    description:
      'Portal institucional da Guarda Municipal com serviços, notícias, orientações, recursos públicos e canais de contato com a população.',
    category: 'site',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/guarda-municipal-hero.webp',
    imageAlt: 'Captura do hero do site institucional da Guarda Municipal com viatura, navegação e chamada principal',
    imageFit: 'contain',
    imagePosition: 'center',
    visual: 'studio',
    featured: true,
    demoUrl: 'https://guarda-municipal.pages.dev/',
    repositoryUrl: '',
    en: {
      type: 'Institutional website',
      description:
        'Institutional portal for the Municipal Guard with services, news, guidance, public resources and contact channels for citizens.',
      imageAlt: 'Hero section of the Municipal Guard website with a patrol car, navigation and main call to action',
    },
  },
  {
    id: 'essenza-clinica',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'Clínica Essenza',
    type: 'Site para clínica',
    description:
      'Site profissional com especialidades, equipe, perguntas frequentes e agendamento simplificado pelo WhatsApp.',
    category: 'site',
    year: '2026',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '',
    imageAlt: '',
    visual: 'studio',
    featured: false,
    demoUrl: '',
    repositoryUrl: '',
  },
  {
    id: 'sabores-da-vila',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'Sabores da Vila',
    type: 'Site para restaurante',
    description:
      'Site responsivo com cardápio, apresentação do ambiente, localização e fluxo direto para reservas.',
    category: 'site',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    imageAlt: '',
    visual: 'product',
    featured: false,
    demoUrl: '',
    repositoryUrl: '',
  },
  //Landing Pages quantidade (04)
  {
    id: 'voa-leyanne',
    title: 'Voa Leyanne',
    type: 'Landing page de serviço de drone',
    description:
      'Página comercial para serviços com drones, apresentando aplicações, portfólio visual e orçamento pelo WhatsApp.',
    category: 'landing-page',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/voa-leyanne-hero.webp',
    imageAlt: 'Hero completo da landing page Voa Leyanne com título, serviços e botões de contato',
    visual: 'task',
    featured: true,
    demoUrl: 'https://www.flyleyanne.com.br/',
    repositoryUrl: '',
    en: {
      type: 'Drone services landing page',
      description:
        'Sales page for drone services, showcasing use cases, a visual portfolio and quote requests via WhatsApp.',
      imageAlt: 'Full hero of the Voa Leyanne landing page with headline, services and contact buttons',
    },
  },
  {
    id: 'fbi-suplementos',
    title: 'FBI Suplementos',
    type: 'Landing page de suplementos',
    description:
      'Página focada em conversão para lançamento de suplemento, com benefícios, prova social e chamada para ação.',
    category: 'landing-page',
    year: '2026',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/images/projects/creatina-forge-hero.webp',
    imageAlt: 'Captura do hero da landing page Creatina Forge com cabeçalho, produto fictício e atleta',
    visual: 'finance',
    featured: true,
    demoUrl: 'https://lange-page-suplementos.pages.dev/',
    repositoryUrl: '',
    en: {
      type: 'Supplement landing page',
      description:
        'Conversion-focused page for a supplement launch, with benefits, social proof and a clear call to action.',
      imageAlt: 'Hero of the Creatina Forge landing page with header, product and athlete',
    },
  },
  {
    id: 'frs-wear',
    title: 'FRS Wear',
    type: 'Landing page de roupas',
    description:
      'Página de campanha para uma coleção de moda, com identidade marcante, catálogo visual e chamadas para compra.',
    category: 'landing-page',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/img-hero-frs-roupas.webp',
    imageAlt: 'Hero da landing page FRS-Wear com loja de roupas ao fundo e chamada Roupa boa, gente boa, do seu bairro pra você.',
    imageFit: 'cover',
    imagePosition: 'center',
    visual: 'product',
    featured: true,
    demoUrl: 'https://lange-page-roupas.pages.dev/',
    repositoryUrl: '',
    en: {
      type: 'Clothing landing page',
      description:
        'Campaign page for a fashion collection, with a bold identity, visual catalog and calls to purchase.',
      imageAlt: 'Hero of the FRS Wear landing page with a clothing store in the background',
    },
  },
  {
    id: 'horizonte-imoveis',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'Horizonte Imóveis',
    type: 'Landing page imobiliária',
    description:
      'Página para divulgação de empreendimento, com diferenciais, galeria, localização e captação de interessados.',
    category: 'landing-page',
    year: '2026',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '',
    imageAlt: '',
    visual: 'task',
    featured: false,
    demoUrl: '',
    repositoryUrl: '',
  },
  // Aplicações web quantidade (04)
  {
    id: 'farisa-personal-trainner',
    title: 'FARISAFIT Personal Trainer',
    type: 'Sistema para personal trainer',
    description:
      'Aplicação para organizar alunos, treinos, avaliações físicas, evolução e acompanhamento individual em um só lugar.',
    category: 'web-app',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2', 'Mercado Pago'],
    image: '/images/projects/farisa-personal-hero.webp',
    imageAlt: 'Página inicial da plataforma FARISAFIT com a chamada principal e o exemplo da página de um personal, com dois personal trainers lado a lado',
    imageFit: 'cover',
    imagePosition: 'center',
    visual: 'finance',
    featured: false,
    demoUrl: 'https://aplicacaoweb-sistema-personal-trainer.pages.dev/',
    repositoryUrl: '',
    en: {
      type: 'Personal trainer platform',
      description:
        'Web app to manage students, workouts, physical assessments, progress and one-on-one coaching in one place.',
      imageAlt: 'FARISAFIT platform home page with the main headline and an example trainer page featuring two personal trainers side by side',
    },
  },
  {
    id: 'frs-barbearia',
    title: 'FRS Barbearia',
    type: 'Sistema de agendamento para barbearia',
    description:
      'Agenda online com escolha de profissional e serviço, controle de horários e confirmação de atendimento pelo WhatsApp.',
    category: 'web-app',
    year: '2026',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: '/images/projects/frs-barbearia-hero.webp',
    imageAlt: 'Hero do site FRS Barbearia com barbeiro cortando cabelo de cliente e chamada Seu estilo. Nossa assinatura.',
    imageFit: 'cover',
    imagePosition: 'center',
    visual: 'task',
    featured: false,
    demoUrl: 'https://frs-barbearia.fabioribeirodev.workers.dev/',
    repositoryUrl: '',
    en: {
      type: 'Barbershop booking system',
      description:
        'Online booking with barber and service selection, schedule management and appointment confirmation via WhatsApp.',
      imageAlt: "Hero of the FRS Barbershop website with a barber cutting a client's hair",
    },
  },
  {
    id: 'estoque-facil',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'Estoque Fácil',
    type: 'Sistema de estoque e vendas',
    description:
      'Painel para cadastrar produtos, acompanhar entradas e saídas, controlar estoque mínimo e consultar o histórico de vendas.',
    category: 'web-app',
    year: '2026',
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    image: '',
    imageAlt: '',
    visual: 'finance',
    featured: false,
    demoUrl: '',
    repositoryUrl: '',
  },
  {
    id: 'pedido-agil',
    hidden: true, // aparece no site quando tiver imagem e link (demoUrl)
    title: 'Pedido Ágil',
    type: 'Sistema de pedidos para restaurantes',
    description:
      'Cardápio digital com montagem do pedido, envio para a cozinha, atualização de status e gestão simplificada dos pedidos.',
    category: 'web-app',
    year: '2026',
    tags: ['React', 'Node.js', 'Express.js', 'Prisma'],
    image: '',
    imageAlt: '',
    visual: 'product',
    featured: false,
    demoUrl: '',
    repositoryUrl: '',
  },
]

// Somente os projetos prontos aparecem no site.
export const visibleProjects = projects.filter((project) => !project.hidden).map(localize)
