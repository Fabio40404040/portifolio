import { profile } from './data/profile.js'
import { projects, projectCategories } from './data/projects.js'
import { skills, workSteps } from './data/skills.js'
import { siteConfig } from './config/site.js'
import { createProjectCard } from './components/project-card.js'
import { setupPortfolioInteractions } from './interactions.js'

const root = document

function setText(field, value) {
  root.querySelectorAll(`[data-profile="${field}"]`).forEach((element) => {
    element.textContent = value
  })
}

function renderProfile() {
  Object.entries(profile).forEach(([field, value]) => {
    if (typeof value === 'string') setText(field, value)
  })

  const image = root.querySelector('[data-profile-photo]')
  const placeholder = root.querySelector('[data-profile-placeholder]')

  image.hidden = !profile.photo
  placeholder.hidden = Boolean(profile.photo)
  placeholder.setAttribute('aria-label', `Espaço reservado para a foto de ${profile.name}`)

  if (profile.photo) {
    image.src = profile.photo
    image.alt = profile.photoAlt
  }
}

function renderFilters() {
  const container = root.querySelector('[data-project-filters]')
  const template = root.querySelector('[data-filter-template]')

  projectCategories.forEach((category, index) => {
    const fragment = template.content.cloneNode(true)
    const button = fragment.querySelector('[data-filter]')
    button.dataset.filter = category.id
    button.textContent = category.label
    button.classList.toggle('is-active', index === 0)
    button.setAttribute('aria-pressed', String(index === 0))
    container.append(fragment)
  })
}

function renderProjects() {
  const grid = root.querySelector('[data-project-grid]')
  const projectTemplate = root.querySelector('[data-project-template]')
  const tagTemplate = root.querySelector('[data-tag-template]')

  projects.forEach((project) => {
    grid.append(createProjectCard(projectTemplate, tagTemplate, project))
  })

  root.querySelector('[data-project-count]').textContent = `${String(projects.length).padStart(2, '0')} projetos`
}

function renderPrinciples() {
  const list = root.querySelector('[data-principle-list]')
  const template = root.querySelector('[data-principle-template]')

  profile.principles.forEach((principle) => {
    const fragment = template.content.cloneNode(true)
    fragment.querySelector('[data-principle]').textContent = principle
    list.append(fragment)
  })
}

function renderSkills() {
  const panel = root.querySelector('[data-skills-panel]')
  const groupTemplate = root.querySelector('[data-skill-template]')
  const itemTemplate = root.querySelector('[data-skill-item-template]')

  skills.forEach((skill) => {
    const fragment = groupTemplate.content.cloneNode(true)
    const items = fragment.querySelector('[data-skill-items]')
    fragment.querySelector('[data-skill-group]').textContent = skill.group

    skill.items.forEach((item) => {
      const itemFragment = itemTemplate.content.cloneNode(true)
      itemFragment.querySelector('[data-skill-item]').textContent = item
      items.append(itemFragment)
    })

    panel.append(fragment)
  })
}

function renderWorkSteps() {
  const grid = root.querySelector('[data-process-grid]')
  const template = root.querySelector('[data-process-template]')

  workSteps.forEach((step) => {
    const fragment = template.content.cloneNode(true)
    fragment.querySelector('[data-step-number]').textContent = step.number
    fragment.querySelector('[data-step-title]').textContent = step.title
    fragment.querySelector('[data-step-text]').textContent = step.text
    grid.append(fragment)
  })
}

function renderContact() {
  root.querySelector('[data-contact-email]').textContent = siteConfig.email
  root.querySelector('[data-social="linkedin"]').href = siteConfig.linkedin
  root.querySelector('[data-social="github"]').href = siteConfig.github
}

function startPortfolio() {
  renderProfile()
  renderFilters()
  renderProjects()
  renderPrinciples()
  renderSkills()
  renderWorkSteps()
  renderContact()
  setupPortfolioInteractions()
}

startPortfolio()
