import './style.css'
import { renderProfile } from './components/profile-view.js'
import { renderProjects } from './components/projects-view.js'
import { renderSkills } from './components/skills-view.js'
import { renderContact } from './components/contact-view.js'
import { setupPortfolioInteractions } from './interactions.js'

renderProfile()
renderProjects()
renderSkills()
renderContact()
setupPortfolioInteractions()

// PWA: registra o service worker (só no build de produção, para não atrapalhar o "npm run dev")
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => console.error('Falha ao registrar o service worker:', error))
  })
}
