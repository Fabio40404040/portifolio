import { profile } from '../data/profile.js'
import { heroSkills, skills, workSteps } from '../data/skills.js'

const principleList = document.querySelector('[data-principle-list]')
const principleTemplate = document.querySelector('[data-principle-template]')

profile.principles.forEach((principle) => {
  const fragment = principleTemplate.content.cloneNode(true)
  fragment.querySelector('[data-principle]').textContent = principle
  principleList.append(fragment)
})

const skillsPanel = document.querySelector('[data-skills-panel]')
const skillGroupTemplate = document.querySelector('[data-skill-template]')
const skillItemTemplate = document.querySelector('[data-skill-item-template]')

skills.forEach((skill) => {
  const fragment = skillGroupTemplate.content.cloneNode(true)
  const items = fragment.querySelector('[data-skill-items]')
  fragment.querySelector('[data-skill-group]').textContent = skill.group

  skill.items.forEach((item) => {
    const itemFragment = skillItemTemplate.content.cloneNode(true)
    itemFragment.querySelector('[data-skill-item]').textContent = item
    items.append(itemFragment)
  })

  skillsPanel.append(fragment)
})

const heroTrack = document.querySelector('[data-hero-skills]')
const heroSkillTemplate = document.querySelector('[data-hero-skill-template]')

for (let copy = 0; copy < 2; copy += 1) {
  const group = document.createElement('div')
  group.className = 'hero-skills__group'
  if (copy === 1) group.setAttribute('aria-hidden', 'true')

  heroSkills.forEach(({ label, icon }) => {
    const fragment = heroSkillTemplate.content.cloneNode(true)
    const image = fragment.querySelector('[data-hero-skill-icon]')
    image.src = icon
    fragment.querySelector('[data-hero-skill]').textContent = label
    group.append(fragment)
  })

  heroTrack.append(group)
}

const processGrid = document.querySelector('[data-process-grid]')
const processTemplate = document.querySelector('[data-process-template]')

workSteps.forEach((step) => {
  const fragment = processTemplate.content.cloneNode(true)
  fragment.querySelector('[data-step-number]').textContent = step.number
  fragment.querySelector('[data-step-title]').textContent = step.title
  fragment.querySelector('[data-step-text]').textContent = step.text
  processGrid.append(fragment)
})
