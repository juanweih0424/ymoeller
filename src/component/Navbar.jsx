import { useState } from 'react'

function Navbar({ activeRoute, navItems, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (event, href) => {
    event.preventDefault()
    onNavigate(href)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0D2240]">
      <nav className="site-shell flex h-[72px] items-center justify-between">
        <a
          href="/"
          className="leading-[0.95] text-white"
          onClick={(event) => handleClick(event, '/')}
        >
          <span className="block text-lg font-semibold tracking-wide">
            Y. Moeller <span className="text-[#4AB8D8]">Consulting</span>
          </span>
          <span className="mt-0.5 block text-sm font-medium tracking-wide text-white/90">
            GmbH & Co KG
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#0D2240] px-5 py-3 lg:hidden">
          <div className="site-shell grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={
                  item.key === '/contact'
                    ? 'mt-2 rounded-md bg-[#4AB8D8] px-3 py-3 text-sm font-semibold text-[#0D2240]'
                    : `rounded-md px-3 py-3 text-sm text-white/80 ${
                        activeRoute === item.key ? 'bg-white/8 text-[#4AB8D8]' : ''
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
