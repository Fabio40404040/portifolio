import { siteConfig } from '../config/site.js'

export function renderContact() {
  const email = document.querySelector('[data-contact-email]')
  email.textContent = siteConfig.email
  email.href = `mailto:${siteConfig.email}`
  document.querySelector('[data-social="linkedin"]').href = siteConfig.linkedin
  document.querySelector('[data-social="github"]').href = siteConfig.github
}
