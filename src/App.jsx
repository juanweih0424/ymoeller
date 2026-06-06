import { useEffect, useMemo, useState } from 'react'
import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Qualifications from './page/Qualifications.jsx'
import Services from './page/Services.jsx'

const routes = {
  '/home': {
    label: 'Home',
    title: 'Y.Moeller | Home',
    description:
      'Independent GMP auditing and consulting for pharmaceutical and biotech companies working across China, India, Europe, and the United States.',
    component: Home,
  },
  '/service': {
    label: 'Services',
    title: 'Y.Moeller | Services',
    description:
      'Worldwide GMP audits, CAPA follow-up, authority inspection support, training, and pharmaceutical quality consulting.',
    component: Services,
  },
  '/qualifications': {
    label: 'Qualifications',
    title: 'Y.Moeller | Qualifications',
    description:
      'Certifications, regulatory experience, conference activity, and authority inspection support credentials.',
    component: Qualifications,
  },
  '/contact': {
    label: 'Contact & Imprint',
    title: 'Y.Moeller | Contact',
    description:
      'Contact Y. Moeller Consulting in Hamburg for GMP audit requests and pharmaceutical compliance consulting.',
    component: Contact,
  },
}

const normalizeRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/home'
  return routes[path] ? path : '/home'
}

const navigateTo = (href) => {
  const path = href.replace(/\/+$/, '') || '/home'
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function App() {
  const [activeRoute, setActiveRoute] = useState(normalizeRoute)
  const route = routes[activeRoute]
  const Page = route.component

  useEffect(() => {
    const onPopState = () => setActiveRoute(normalizeRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onDocumentClick = (event) => {
      const link = event.target.closest('a')

      if (!link || link.target || event.defaultPrevented) {
        return
      }

      const url = new URL(link.href)
      const sameOrigin = url.origin === window.location.origin
      const routePath = url.pathname.replace(/\/+$/, '') || '/home'
      const knownRoute = routes[routePath]

      if (sameOrigin && knownRoute) {
        event.preventDefault()
        navigateTo(routePath)
      }
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  useEffect(() => {
    document.title = route.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', route.description)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [route])

  const navItems = useMemo(
    () =>
      [
        '/home',
        '/service',
        '/qualifications',
        '/contact',
      ].map((key) => ({ key, label: routes[key].label, href: key })),
    [],
  )

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-content-bg)] text-slate-800">
      <Navbar activeRoute={activeRoute} navItems={navItems} onNavigate={navigateTo} />
      <main className="app-main flex flex-1 flex-col">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
