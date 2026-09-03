import { projectCategories, projects } from '../data/projects.js'
import { createProjectCard } from './project-card.js'

const filtersContainer = document.querySelector('[data-project-filters]')
const filterTemplate = document.querySelector('[data-filter-template]')

projectCategories.forEach((category, index) => {
  const fragment = filterTemplate.content.cloneNode(true)
  const button = fragment.querySelector('[data-filter]')
  button.dataset.filter = category.id
  button.textContent = category.label
  button.classList.toggle('is-active', index === 0)
  button.setAttribute('aria-pressed', String(index === 0))
  filtersContainer.append(fragment)
})

const grid = document.querySelector('[data-project-grid]')
const projectTemplate = document.querySelector('[data-project-template]')
const tagTemplate = document.querySelector('[data-tag-template]')

projects.forEach((project) => {
  grid.append(createProjectCard(projectTemplate, tagTemplate, project))
})

document.querySelector('[data-project-count]').textContent = `${String(projects.length).padStart(2, '0')} projetos`
