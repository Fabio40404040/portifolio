import { siteConfig } from './config/site.js'

function getContactMessage(form) {
  const formData = new FormData(form)

  return [
    `Olá, Fábio! Meu nome é ${formData.get('name')}.`,
    `E-mail: ${formData.get('email')}`,
    `Tipo de projeto: ${formData.get('projectType')}`,
    '',
    String(formData.get('message')),
  ].join('\n')
}

function openContactChannel(form, channel) {
  if (!form.reportValidity()) return

  const message = getContactMessage(form)
  const url = channel === 'whatsapp'
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://mail.google.com/mail/?${new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: siteConfig.email,
        su: 'Contato pelo portfólio',
        body: message,
      })}`

  window.open(url, '_blank', 'noopener,noreferrer')
}

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
    if (event.key === 'Escape') {
      closeMenu()
      closeFilterMenus()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 620) closeMenu()
  })

  const contactForm = document.querySelector('[data-contact-form]')
  const whatsappButton = document.querySelector('[data-whatsapp-submit]')

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    openContactChannel(contactForm, 'gmail')
  })

  whatsappButton?.addEventListener('click', () => {
    openContactChannel(contactForm, 'whatsapp')
  })

  const filters = document.querySelectorAll('[data-filter]')
  const projects = document.querySelectorAll('[data-project]')
  const filterMenus = document.querySelectorAll('[data-filter-menu]')
  const filterProjects = document.querySelectorAll('[data-filter-project]')

  const closeFilterMenus = () => {
    filterMenus.forEach((menu) => menu.classList.remove('is-open'))
    filters.forEach((filter) => filter.setAttribute('aria-expanded', 'false'))
  }

  const selectCategory = (category) => {
    filters.forEach((item) => {
      const isActive = item.dataset.filter === category
      item.classList.toggle('is-active', isActive)
      item.setAttribute('aria-pressed', String(isActive))
    })

    projects.forEach((project) => {
      project.hidden = category !== 'all' && project.dataset.category !== category
    })
  }

  filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
      event.stopPropagation()
      const category = filter.dataset.filter
      const menu = filter.closest('[data-filter-menu]')
      const hasList = Boolean(menu?.querySelector('[data-filter-list]'))
      const willOpen = hasList && !menu.classList.contains('is-open')

      closeFilterMenus()
      selectCategory(category)

      if (willOpen) {
        menu.classList.add('is-open')
        filter.setAttribute('aria-expanded', 'true')
      } else {
        filter.blur()
      }
    })
  })

  filterProjects.forEach((projectButton) => {
    projectButton.addEventListener('click', (event) => {
      event.stopPropagation()
      const category = projectButton.dataset.category
      const projectId = projectButton.dataset.projectId
      projectButton.blur()
      selectCategory(category)
      closeFilterMenus()

      const selectedProject = document.querySelector(`[data-project][data-project-id="${projectId}"]`)
      const headerHeight = document.querySelector('[data-header]')?.offsetHeight || 0

      projects.forEach((project) => project.classList.remove('is-selected'))
      selectedProject?.classList.add('is-selected')

      if (!selectedProject) return

      const availableHeight = window.innerHeight - headerHeight
      const projectHeight = selectedProject.offsetHeight
      const projectTop = selectedProject.getBoundingClientRect().top + window.scrollY
      const centeredSpace = Math.max(16, (availableHeight - projectHeight) / 2)
      const targetTop = projectTop - headerHeight - centeredSpace

      window.scrollTo({
        behavior: 'instant',
        top: Math.max(0, targetTop),
      })
    })
  })

  document.addEventListener('click', closeFilterMenus)

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
