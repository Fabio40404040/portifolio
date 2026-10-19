// Tradução do portfólio (Português / English).
// O idioma vem, nesta ordem: do link (?lang=en), da última escolha do visitante
// ou do idioma do navegador. Textos fixos do index.html são traduzidos pelos
// atributos data-i18n*; textos dos dados usam o campo `en` de cada item.

const SUPPORTED = ['pt', 'en']
const STORAGE_KEY = 'portfolio-lang'

function detectLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (SUPPORTED.includes(fromUrl)) return fromUrl

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(stored)) return stored
  } catch {
    // navegação anônima ou armazenamento bloqueado: segue para o navegador
  }

  const browser = (navigator.language || 'pt').toLowerCase()
  return browser.startsWith('pt') ? 'pt' : 'en'
}

export const lang = detectLanguage()

// Mescla a versão em inglês (campo `en`) por cima do item quando o site está em inglês.
export function localize(item) {
  if (lang !== 'en' || !item?.en) return item
  return { ...item, ...item.en }
}

// Textos usados pelo JavaScript (cards, filtros, menu, mensagens).
const ui = {
  pt: {
    viewProject: 'Ver projeto',
    comingSoon: 'Projeto em breve',
    visualPreview: 'Prévia visual de',
    projectScreen: 'Tela do projeto',
    projectsIn: 'Projetos em',
    projectsCount: 'projetos',
    technologiesUsed: 'Tecnologias utilizadas',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    photoPlaceholder: 'Espaço reservado para a foto de',
    messageGreeting: (name) => `Olá, Fábio! Meu nome é ${name}.`,
    messageEmail: 'E-mail',
    messageType: 'Tipo de projeto',
    emailSubject: 'Contato pelo portfólio',
  },
  en: {
    viewProject: 'View project',
    comingSoon: 'Coming soon',
    visualPreview: 'Visual preview of',
    projectScreen: 'Screenshot of',
    projectsIn: 'Projects in',
    projectsCount: 'projects',
    technologiesUsed: 'Technologies used',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    photoPlaceholder: 'Photo placeholder for',
    messageGreeting: (name) => `Hi, Fábio! My name is ${name}.`,
    messageEmail: 'Email',
    messageType: 'Project type',
    emailSubject: 'Contact from portfolio',
  },
}

export const t = ui[lang]

// Textos fixos do index.html em inglês (o português já está no próprio HTML).
const staticEn = {
  title: 'Fábio — Full Stack Developer',
  'brand.aria': 'Back to top',
  'nav.aria': 'Main navigation',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.process': 'Process',
  'nav.contact': 'Contact',
  'lang.aria': 'Language',
  'hero.tagline': '<span>From</span> front-end <span>to</span> back-end',
  'hero.description':
    'I lead every project with responsibility, clear communication and a commitment to well-built, secure delivery that matches what was agreed.',
  'hero.cta': 'View projects',
  'hero.link': 'See my work',
  'hero.skills': 'Technologies I use',
  'projects.kicker': 'Selected work',
  'projects.title': 'Projects that turn<br>ideas into reality.',
  'projects.description': 'A selection of interfaces built to solve real problems with clarity and personality.',
  'projects.filters': 'Filter projects',
  'about.kicker': 'About me',
  'about.statement': 'I don’t just build screens. I build the bridge between a good idea and the people who need it.',
  'about.title': 'Curious to learn.<br>Careful to deliver.',
  'process.kicker': 'How I work',
  'process.title': 'A simple process.<br>A well-thought-out result.',
  'contact.kicker': 'Have a project in mind?',
  'contact.title': 'Let’s bring your<br>idea to life.',
  'contact.description':
    'Tell me a little about the challenge. I’ll reply with the next steps to turn your idea into a digital experience.',
  'form.name': 'Your name',
  'form.namePlaceholder': 'What should I call you?',
  'form.email': 'Your email',
  'form.emailPlaceholder': 'you@example.com',
  'form.type': 'Project type',
  'form.typeSelect': 'Select an option',
  'form.typeInstitutional': 'Business website',
  'form.typeEcommerce': 'E-commerce',
  'form.typeLanding': 'Landing page',
  'form.typeWebApp': 'Web application',
  'form.typeMaintenance': 'Maintenance or improvements',
  'form.typeOther': 'Other project',
  'form.message': 'Tell me about your idea',
  'form.messagePlaceholder': 'Goal, deadline and what you need built...',
  'form.gmail': 'Send via Gmail',
  'form.whatsapp': 'Send via WhatsApp',
  'form.note': 'You review the message before sending it.',
  'footer.text': 'Designed and built with attention to detail.',
  'footer.rights': 'All rights reserved.',
}

export function applyStaticTranslations() {
  const root = document.documentElement
  root.lang = lang === 'en' ? 'en' : 'pt-BR'

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang))
  })

  if (lang !== 'en') return

  document.title = staticEn.title
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = staticEn[element.dataset.i18n]
    if (text) element.textContent = text
  })
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const html = staticEn[element.dataset.i18nHtml]
    if (html) element.innerHTML = html
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const text = staticEn[element.dataset.i18nPlaceholder]
    if (text) element.placeholder = text
  })
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const text = staticEn[element.dataset.i18nAria]
    if (text) element.setAttribute('aria-label', text)
  })
}

export function setupLanguageSwitch() {
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.lang
      if (next === lang) return

      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // sem armazenamento: o idioma continua no link (?lang=)
      }

      const url = new URL(window.location.href)
      url.searchParams.set('lang', next)
      window.location.assign(url)
    })
  })
}
