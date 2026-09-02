import { profile } from '../data/profile.js'
import { projects, projectCategories } from '../data/projects.js'
import { skills, workSteps } from '../data/skills.js'
import { siteConfig } from '../config/site.js'
import { header } from '../components/header.js'
import { projectCard } from '../components/project-card.js'
import { footer } from '../components/footer.js'
import { setupPortfolioInteractions } from '../features/portfolio.js'

export function renderHomePage(root) {
  root.innerHTML = `
    ${header()}

    <main>
      <section class="hero" id="inicio">
        <div class="hero__content">
          <p class="eyebrow"><span></span>${profile.availability}</p>
          <h1>${profile.headline}</h1>

          <div class="hero__actions">
            <a class="button button--primary" href="#projetos">Ver projetos <span aria-hidden="true">↘</span></a>
            <a class="text-link" href="#sobre">Conheça meu trabalho <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <figure class="hero__portrait">
          <div class="portrait-frame">
            ${
              profile.photo
                ? `<img src="${profile.photo}" alt="${profile.photoAlt}" fetchpriority="high">`
                : `<div class="portrait-placeholder" role="img" aria-label="Espaço reservado para a foto de ${profile.name}">
                    <strong>${profile.initials}</strong>
                    <span>Adicione sua foto</span>
                  </div>`
            }
          </div>
          <figcaption>
            <span>${profile.role}</span>
            <span>${profile.location}</span>
          </figcaption>
        </figure>
      </section>

      <section class="project-section section" id="projetos">
        <div class="section-heading" data-reveal>
          <div>
            <p class="section-kicker">Trabalhos selecionados</p>
            <h2>Projetos que unem<br>ideia e execução.</h2>
          </div>
          <p>Uma seleção de interfaces construídas para resolver problemas reais com clareza e personalidade.</p>
        </div>

        <div class="project-toolbar" data-reveal>
          <div class="project-filters" aria-label="Filtrar projetos">
            ${projectCategories
              .map(
                (category, index) => `
                  <button class="filter-button${index === 0 ? ' is-active' : ''}" type="button" data-filter="${category.id}" aria-pressed="${index === 0}">
                    ${category.label}
                  </button>`,
              )
              .join('')}
          </div>
          <span>${String(projects.length).padStart(2, '0')} projetos</span>
        </div>

        <div class="project-grid">
          ${projects.map(projectCard).join('')}
        </div>
      </section>

      <section class="about-section section" id="sobre">
        <div class="about-intro" data-reveal>
          <p class="section-kicker">Sobre mim</p>
          <p class="about-statement">Não construo apenas telas. Construo a ponte entre uma boa ideia e as pessoas que precisam dela.</p>
        </div>

        <div class="about-grid">
          <div class="about-copy" data-reveal>
            <h2>Curiosidade para aprender.<br>Critério para entregar.</h2>
            <p>${profile.about}</p>
            <ul class="principle-list">
              ${profile.principles.map((principle) => `<li><span>✓</span>${principle}</li>`).join('')}
            </ul>
          </div>

          <div class="skills-panel" id="skills" data-reveal>
            ${skills
              .map(
                (skill) => `
                  <div class="skill-group">
                    <p>${skill.group}</p>
                    <div>${skill.items.map((item) => `<span>${item}</span>`).join('')}</div>
                  </div>`,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="process-section section" id="processo">
        <div class="section-heading section-heading--process" data-reveal>
          <div>
            <p class="section-kicker">Como eu trabalho</p>
            <h2>Um processo simples.<br>Um resultado bem pensado.</h2>
          </div>
        </div>

        <div class="process-grid">
          ${workSteps
            .map(
              (step) => `
                <article class="process-card" data-reveal>
                  <span>${step.number}</span>
                  <h3>${step.title}</h3>
                  <p>${step.text}</p>
                </article>`,
            )
            .join('')}
        </div>
      </section>

      <section class="contact-section section" id="contato">
        <div class="contact-card" data-reveal>
          <p class="section-kicker">Tem um projeto em mente?</p>
          <h2>Vamos tirar essa ideia<br>do papel.</h2>
          <p>Conte um pouco sobre o desafio. Eu respondo com os próximos passos para transformá-lo em uma experiência digital.</p>
          <a class="button button--dark" href="mailto:${siteConfig.email}">Enviar uma mensagem <span aria-hidden="true">↗</span></a>
          <span class="contact-email">${siteConfig.email}</span>
        </div>
      </section>
    </main>

    ${footer()}
  `

  setupPortfolioInteractions()
}
