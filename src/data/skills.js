export const skills = [
  { group: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'] },
  { group: 'Back-end', items: ['Node.js', 'Express.js', 'REST API'] },
  { group: 'Banco de dados', items: ['PostgreSQL', 'Prisma'] },
  { group: 'Versionamento', items: ['Git', 'GitHub'] },
]

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
  Git: '/icons/skills/git.svg',
  GitHub: '/icons/skills/github.svg',
}

export const heroSkills = skills
  .flatMap(({ items }) => items)
  .map((label) => ({ label, icon: skillIcons[label] }))

export const workSteps = [
  {
    number: '01',
    title: 'Entender',
    text: 'Alinho objetivo, público e resultado esperado antes de começar a construir.',
  },
  {
    number: '02',
    title: 'Projetar',
    text: 'Organizo conteúdo e interface para criar uma experiência clara em cada tela.',
  },
  {
    number: '03',
    title: 'Desenvolver',
    text: 'Transformo o projeto em código responsivo, rápido e simples de evoluir.',
  },
]
