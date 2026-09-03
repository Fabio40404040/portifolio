import { projectCategories, projects } from '../data/projects.js'
import { createProjectCard } from './project-card.js'

export function renderProjects() {
  const filtersContainer = document.querySelector('[data-project-filters]')
  const filterTemplate = document.querySelector('[data-filter-template]')
  const filterProjectTemplate = document.querySelector('[data-filter-project-template]')

  projectCategories.forEach((category, index) => {
    const fragment = filterTemplate.content.cloneNode(true)
    const menu = fragment.querySelector('[data-filter-menu]')
    const button = fragment.querySelector('[data-filter]')
    const list = fragment.querySelector('[data-filter-list]')
    button.dataset.filter = category.id
    button.textContent = category.label
    button.classList.toggle('is-active', index === 0)
    button.setAttribute('aria-pressed', String(index === 0))

    if (category.id === 'all') {
      menu.classList.add('filter-menu--single')
      list.remove()
    } else {
      const listId = `filter-list-${category.id}`
      button.setAttribute('aria-haspopup', 'true')
      button.setAttribute('aria-expanded', 'false')
      button.setAttribute('aria-controls', listId)
      list.id = listId
      list.setAttribute('aria-label', `Projetos em ${category.label}`)

      projects
        .filter((project) => project.category === category.id)
        .forEach((project) => {
          const projectFragment = filterProjectTemplate.content.cloneNode(true)
          const projectButton = projectFragment.querySelector('[data-filter-project]')
          projectButton.dataset.projectId = project.id
          projectButton.dataset.category = category.id
          projectButton.textContent = project.title
          list.append(projectFragment)
        })
    }

    filtersContainer.append(fragment)
  })

  const grid = document.querySelector('[data-project-grid]')
  const projectTemplate = document.querySelector('[data-project-template]')
  const tagTemplate = document.querySelector('[data-tag-template]')

  projects.forEach((project) => {
    grid.append(createProjectCard(projectTemplate, tagTemplate, project))
  })

  document.querySelector('[data-project-count]').textContent = `${String(projects.length).padStart(2, '0')} projetos`
}
