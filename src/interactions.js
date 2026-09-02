export function setupPortfolioInteractions() {
  const menuButton = document.querySelector('[data-menu-button]')
  const menu = document.querySelector('[data-menu]')

  const closeMenu = () => {
    menuButton?.setAttribute('aria-expanded', 'false')
    menuButton?.setAttribute('aria-label', 'Abrir menu')
    menu?.classList.remove('is-open')
    document.body.classList.remove('menu-open')
  }

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
    menuButton.setAttribute('aria-expanded', String(!isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu')
    menu?.classList.toggle('is-open', !isOpen)
    document.body.classList.toggle('menu-open', !isOpen)
  })

  menu?.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return
    closeMenu()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 620) closeMenu()
  })

  const filters = document.querySelectorAll('[data-filter]')
  const projects = document.querySelectorAll('[data-project]')

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter
      filters.forEach((item) => item.classList.toggle('is-active', item === filter))
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === filter)))

      projects.forEach((project) => {
        const shouldShow = category === 'all' || project.dataset.category === category
        project.hidden = !shouldShow
      })
    })
  })

  const revealTargets = document.querySelectorAll('[data-reveal]')

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((target) => target.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.12 },
  )

  revealTargets.forEach((target) => observer.observe(target))
}
