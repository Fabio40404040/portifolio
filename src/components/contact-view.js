import { siteConfig } from '../config/site.js'
import { lang } from '../i18n.js'

export function renderContact() {
  const email = document.querySelector('[data-contact-email]')
  email.textContent = siteConfig.email
  email.href = `mailto:${siteConfig.email}`
  const cv = document.querySelector('[data-cv]')
  const cvPath = (lang === 'en' && siteConfig.cvPathEn) || siteConfig.cvPath
  if (cv && cvPath) {
    cv.href = cvPath
    cv.hidden = false
  }

  document.querySelector('[data-year]').textContent = new Date().getFullYear()
  document.querySelector('[data-social="linkedin"]').href = siteConfig.linkedin
  document.querySelector('[data-social="github"]').href = siteConfig.github
}
