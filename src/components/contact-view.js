import { siteConfig } from '../config/site.js'

export function renderContact() {
  document.querySelector('[data-contact-email]').textContent = siteConfig.email
  document.querySelector('[data-social="linkedin"]').href = siteConfig.linkedin
  document.querySelector('[data-social="github"]').href = siteConfig.github
}
