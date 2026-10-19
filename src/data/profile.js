import { localize } from '../i18n.js'

const profileData = {
  name: 'Fábio',
  initials: 'FS',
  role: 'Fábio · Desenvolvedor Full Stack',
  headlineLead: 'Desenvolvedor',
  headlineFocus: 'Full Stack',
  availability: 'Disponível para novos projetos',
  location: 'Brasil',
  photo: '/images/perfil.webp',
  photoAlt: 'Foto de Fábio, desenvolvedor Full Stack',
  about:
    'Sou um desenvolvedor focado em criar produtos digitais que unem clareza, desempenho e uma boa experiência para quem usa. Gosto de transformar problemas complexos em interfaces simples, acessíveis e fáceis de manter.',
  principles: ['Código organizado', 'Design responsivo', 'Foco no usuário'],
  // Versão em inglês (aparece quando o visitante escolhe EN).
  en: {
    role: 'Fábio · Full Stack Developer',
    headlineLead: 'Full Stack',
    headlineFocus: 'Developer',
    availability: 'Available for new projects',
    location: 'Brazil',
    photoAlt: 'Photo of Fábio, Full Stack Developer',
    about:
      'I’m a developer focused on building digital products that combine clarity, performance and a great experience for the people who use them. I enjoy turning complex problems into simple, accessible and easy-to-maintain interfaces.',
    principles: ['Clean code', 'Responsive design', 'User focus'],
  },
}

export const profile = localize(profileData)
