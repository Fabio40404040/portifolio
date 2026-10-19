import { profile } from '../data/profile.js'
import { t } from '../i18n.js'

function setText(field, value) {
  document.querySelectorAll(`[data-profile="${field}"]`).forEach((element) => {
    element.textContent = value
  })
}

export function renderProfile() {
  Object.entries(profile).forEach(([field, value]) => {
    if (typeof value === 'string') setText(field, value)
  })

  const image = document.querySelector('[data-profile-photo]')
  const placeholder = document.querySelector('[data-profile-placeholder]')

  image.hidden = !profile.photo
  placeholder.hidden = Boolean(profile.photo)
  placeholder.setAttribute('aria-label', `${t.photoPlaceholder} ${profile.name}`)

  if (profile.photo) {
    image.src = profile.photo
    image.alt = profile.photoAlt
  }
}
