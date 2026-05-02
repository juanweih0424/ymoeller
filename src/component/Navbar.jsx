import { useState } from 'react'

function Navbar({ activeRoute, navItems, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (event, href) => {
    event.preventDefault()
    onNavigate(href)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-section-bg)]/95 backdrop-blur">
      <nav className="site-shell flex h-[76px] items-center justify-between">
        <a
          href="/"
          className="leading-tight text-[var(--color-text-primary)]"
          onClick={(event) => handleClick(event, '/')}
        >
          <span className="block text-base font-semibold tracking-wide sm:text-lg">
            Y. Moeller Consulting GmbH & Co KG
          </span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
            Independent GMP Auditing & Consulting
          </span>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={
                  item.key === '/contact'
                    ? `nav-contact-link ${
                        activeRoute === item.key ? 'nav-contact-link-active' : ''
                      }`
                    : `nav-link ${activeRoute === item.key ? 'nav-link-active' : ''}`
                }
                onClick={(event) => handleClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border-strong)] text-[var(--color-text-primary)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-section-bg)] px-5 py-3 lg:hidden">
          <div className="site-shell grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={
                  item.key === '/contact'
                    ? 'mt-2 rounded-md bg-[var(--color-accent)] px-3 py-3 text-sm font-semibold text-[var(--color-accent-ink)]'
                    : `rounded-md px-3 py-3 text-sm text-[var(--color-text-secondary)] ${
                        activeRoute === item.key ? 'bg-white/8 text-[var(--color-accent)]' : ''
                      }`
                }
                onClick={(event) => handleClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
