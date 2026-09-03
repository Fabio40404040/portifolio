import { siteConfig } from '../config/site.js'

document.querySelector('[data-contact-email]').textContent = siteConfig.email
document.querySelector('[data-social="linkedin"]').href = siteConfig.linkedin
document.querySelector('[data-social="github"]').href = siteConfig.github
