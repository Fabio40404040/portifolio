function projectVisual(visual, title) {
  const previews = {
    finance: `
      <div class="preview-shell preview-shell--finance">
        <div class="preview-sidebar"><span></span><span></span><span></span><span></span></div>
        <div class="preview-body"><div class="preview-title"></div><div class="metric-row"><i></i><i></i><i></i></div><div class="chart"><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
      </div>`,
    studio: `
      <div class="preview-shell preview-shell--studio">
        <div class="studio-word">NORTE<span>®</span></div><div class="studio-grid"><i></i><i></i><i></i></div><p>Creative direction<br>for bold ideas.</p>
      </div>`,
    task: `
      <div class="preview-shell preview-shell--task">
        <div class="task-nav"></div><div class="task-column"><b>Today</b><i></i><i></i><i></i></div><div class="task-column"><b>Doing</b><i></i><i></i></div><div class="task-column"><b>Done</b><i></i><i></i></div>
      </div>`,
    product: `
      <div class="preview-shell preview-shell--product">
        <div class="product-copy"><b>BRIGHTER<br>IDEAS.</b><span></span><i></i></div><div class="product-orb"></div>
      </div>`,
  }

  return `<div class="project-card__visual" aria-label="Prévia visual de ${title}">${previews[visual]}</div>`
}

export function projectCard(project) {
  const href = project.demoUrl || '#contato'
  const linkLabel = project.demoUrl ? 'Abrir projeto' : 'Solicitar apresentação'

  return `
    <article class="project-card" data-project data-category="${project.category}">
      ${
        project.image
          ? `<div class="project-card__visual"><img class="project-card__image" src="${project.image}" alt="${project.imageAlt || `Tela do projeto ${project.title}`}" loading="lazy"></div>`
          : projectVisual(project.visual, project.title)
      }
      <div class="project-card__content">
        <div>
          <p class="project-card__meta">${project.type} · ${project.year}</p>
          <h3>${project.title}</h3>
        </div>
        <a class="project-card__link" href="${href}" aria-label="${linkLabel}: ${project.title}">↗</a>
      </div>
      <p class="project-card__description">${project.description}</p>
      <ul class="tag-list" aria-label="Tecnologias utilizadas">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
      </ul>
    </article>
  `
}
