import { useEffect, useMemo, useState } from 'react'
import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Privacy from './page/Privacy.jsx'
import Qualifications from './page/Qualifications.jsx'
import Services from './page/Services.jsx'

const routes = {
  '/': {
    label: 'Home',
    title: 'Y. Moeller Consulting | GMP Auditing in China & India',
    description:
      'Independent GMP auditing and consulting for pharmaceutical and biotech companies working across China, India, Europe, and the United States.',
    component: Home,
  },
  '/services': {
    label: 'Services',
    title: 'GMP Audit Services | Y. Moeller Consulting',
    description:
      'Worldwide GMP audits, CAPA follow-up, authority inspection support, training, and pharmaceutical quality consulting.',
    component: Services,
  },
  '/qualifications': {
    label: 'Qualifications',
    title: 'Qualifications | Y. Moeller Consulting',
    description:
      'Certifications, regulatory experience, conference activity, and authority inspection support credentials.',
    component: Qualifications,
  },
  '/contact': {
    label: 'Contact & Imprint',
    title: 'Contact | Y. Moeller Consulting',
    description:
      'Contact Y. Moeller Consulting in Hamburg for GMP audit requests and pharmaceutical compliance consulting.',
    component: Contact,
  },
  '/privacy': {
    label: 'Privacy Policy',
    title: 'Privacy Policy | Y. Moeller Consulting',
    description:
      'Privacy policy information for visitors to the Y. Moeller Consulting website.',
    component: Privacy,
  },
}

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

const stripBasePath = (pathname) => {
  if (basePath && pathname === basePath) {
    return '/'
  }

  if (basePath && pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || '/'
  }

  return pathname
}

const normalizeRoute = () => {
  const path = stripBasePath(window.location.pathname).replace(/\/+$/, '') || '/'
  return routes[path] ? path : '/'
}

const navigateTo = (href) => {
  const path = href.replace(/\/+$/, '') || '/'
  const browserPath = `${basePath}${path === '/' ? '/' : path}`
  window.history.pushState({}, '', browserPath)
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
      const routePath = stripBasePath(url.pathname).replace(/\/+$/, '') || '/'
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
        '/',
        '/services',
        '/qualifications',
        '/contact',
      ].map((key) => ({ key, label: routes[key].label, href: key })),
    [],
  )

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar activeRoute={activeRoute} navItems={navItems} onNavigate={navigateTo} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
