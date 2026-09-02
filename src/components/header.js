import { profile } from '../data/profile.js'

export function header() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="#inicio" aria-label="Voltar ao início">
        <span class="brand__mark">${profile.initials}</span>
        <span>${profile.name}</span>
      </a>

      <button class="menu-button" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-button>
        <span></span><span></span>
      </button>

      <nav class="site-nav" aria-label="Navegação principal" data-menu>
        <a href="#inicio">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#processo">Works</a>
      </nav>
    </header>
  `
}
