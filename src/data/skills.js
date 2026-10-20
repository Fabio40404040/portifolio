import { lang, localize } from '../i18n.js'

const skillGroups = [
  { group: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'] },
  { group: 'Back-end', items: ['Node.js', 'Express.js', 'REST API', 'Cloudflare Workers'] },
  { group: 'Banco de dados', items: ['PostgreSQL', 'Supabase', 'Cloudflare D1', 'SQL', 'Prisma'], en: { group: 'Database' } },
  { group: 'Nuvem e deploy', items: ['Cloudflare R2', 'Vercel', 'Render'], en: { group: 'Cloud & deploy' } },
  { group: 'Inteligência Artificial', items: ['Integração com IA'], en: { group: 'Artificial Intelligence' } },
  { group: 'Versionamento', items: ['Git', 'GitHub'], en: { group: 'Version control' } },
]

// Nome em inglês das skills que mudam de idioma.
const skillNamesEn = {
  'Integração com IA': 'AI integration',
}

const skillName = (label) => (lang === 'en' && skillNamesEn[label]) || label

export const skills = skillGroups.map(localize).map((group) => ({ ...group, items: group.items.map(skillName) }))

const skillIcons = {
  HTML5: '/icons/skills/html5.svg',
  CSS3: '/icons/skills/css.svg',
  JavaScript: '/icons/skills/javascript.svg',
  TypeScript: '/icons/skills/typescript.svg',
  React: '/icons/skills/react.svg',
  'Node.js': '/icons/skills/nodedotjs.svg',
  'Express.js': '/icons/skills/express.svg',
  'REST API': '/icons/skills/openapiinitiative.svg',
  PostgreSQL: '/icons/skills/postgresql.svg',
  Prisma: '/icons/skills/prisma.svg',
  'Cloudflare Workers': '/icons/skills/cloudflareworkers.svg',
  'Cloudflare D1': '/icons/skills/cloudflare.svg',
  'Cloudflare R2': '/icons/skills/cloudflare.svg',
  Supabase: '/icons/skills/supabase.svg',
  SQL: '/icons/skills/sql.svg',
  Vercel: '/icons/skills/vercel.svg',
  Render: '/icons/skills/render.svg',
  'Integração com IA': '/icons/skills/ai.svg',
  Git: '/icons/skills/git.svg',
  GitHub: '/icons/skills/github.svg',
}

export const heroSkills = skillGroups
  .flatMap(({ items }) => items)
  .map((label) => ({ label: skillName(label), icon: skillIcons[label] }))

export const workSteps = [
  {
    number: '01',
    title: 'Entender',
    text: 'Alinho objetivo, público e resultado esperado antes de começar a construir.',
    en: { title: 'Understand', text: 'I align goals, audience and expected results before I start building.' },
  },
  {
    number: '02',
    title: 'Projetar',
    text: 'Organizo conteúdo e interface para criar uma experiência clara em cada tela.',
    en: { title: 'Design', text: 'I organize content and interface to create a clear experience on every screen.' },
  },
  {
    number: '03',
    title: 'Desenvolver',
    text: 'Transformo o projeto em código responsivo, rápido e simples de evoluir.',
    en: { title: 'Build', text: 'I turn the plan into responsive, fast code that is easy to evolve.' },
  },
].map(localize)
