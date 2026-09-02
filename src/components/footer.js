import { profile } from '../data/profile.js'
import { siteConfig } from '../config/site.js'

export function footer() {
  return `
    <footer class="site-footer">
      <a class="brand" href="#inicio" aria-label="Voltar ao início">
        <span class="brand__mark">${profile.initials}</span><span>${profile.name}</span>
      </a>
      <p>Projetado e desenvolvido com atenção aos detalhes.</p>
      <div class="footer-links">
        <a href="${siteConfig.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="${siteConfig.github}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  `
}
