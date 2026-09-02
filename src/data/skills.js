export const skills = [
  { group: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'] },
  { group: 'Back-end', items: ['Node.js', 'Express.js', 'REST API'] },
  { group: 'Banco de dados', items: ['PostgreSQL', 'Prisma'] },
  { group: 'Versionamento', items: ['Git', 'GitHub'] },
]

export const heroSkills = skills.flatMap(({ items }) => items)

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
