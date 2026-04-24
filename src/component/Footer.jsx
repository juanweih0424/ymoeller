function Footer() {
  const goTo = (event, href) => {
    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <footer>
      <div className="bg-[#081628] py-8 text-white/60">
        <div className="site-shell grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold text-white">Y. Moeller Consulting GmbH & Co KG</p>
            <p className="mt-2 max-w-xl text-xs leading-6">
              Independent GMP auditing and consulting for pharmaceutical and biotech companies.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs">
            <a href="/contact" className="hover:text-white" onClick={(event) => goTo(event, '/contact')}>
              Contact & Imprint
            </a>
            <a href="/privacy" className="hover:text-white" onClick={(event) => goTo(event, '/privacy')}>
              Privacy
            </a>
          </div>
          <p className="text-xs md:col-span-2">(c) 2026 Y. Moeller Consulting GmbH & Co KG</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
