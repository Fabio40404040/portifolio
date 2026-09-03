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
