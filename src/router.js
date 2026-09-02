import { renderHomePage } from './pages/home.js'

const routes = {
  '/': renderHomePage,
}

export function startRouter() {
  const render = () => {
    const page = routes[window.location.pathname] ?? routes['/']
    page(document.querySelector('#app'))
  }

  window.addEventListener('popstate', render)
  render()
}
