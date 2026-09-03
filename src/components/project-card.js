export function createProjectCard(projectTemplate, tagTemplate, project) {
  const hasDemo = Boolean(project.demoUrl)
  const linkLabel = hasDemo ? 'Ver projeto' : 'Projeto em breve'
  const fragment = projectTemplate.content.cloneNode(true)
  const card = fragment.querySelector('[data-project]')
  const visual = fragment.querySelector('[data-project-visual]')
  const preview = fragment.querySelector('[data-project-preview]')
  const image = fragment.querySelector('[data-project-image]')
  const link = fragment.querySelector('[data-project-link]')
  const tags = fragment.querySelector('[data-project-tags]')

  card.dataset.category = project.category
  visual.setAttribute('aria-label', `Prévia visual de ${project.title}`)
  preview.dataset.visual = project.visual
  preview.hidden = Boolean(project.image)
  image.hidden = !project.image

  if (project.image) {
    image.src = project.image
    image.alt = project.imageAlt || `Tela do projeto ${project.title}`
  }

  fragment.querySelector('[data-project-meta]').textContent = `${project.type} · ${project.year}`
  fragment.querySelector('[data-project-title]').textContent = project.title
  fragment.querySelector('[data-project-description]').textContent = project.description
  link.textContent = hasDemo ? `${linkLabel} ↗` : linkLabel
  link.setAttribute('aria-label', `${linkLabel}: ${project.title}`)

  if (hasDemo) {
    link.href = project.demoUrl
    link.target = '_blank'
    link.rel = 'noreferrer'
  } else {
    link.removeAttribute('href')
    link.setAttribute('aria-disabled', 'true')
    link.classList.add('is-disabled')
  }

  project.tags.forEach((tag) => {
    const tagFragment = tagTemplate.content.cloneNode(true)
    tagFragment.querySelector('[data-tag]').textContent = tag
    tags.append(tagFragment)
  })

  return fragment
}
