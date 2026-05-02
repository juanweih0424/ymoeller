function Footer() {
  return (
    <footer>
      <div className="border-t border-[var(--color-border)] bg-[var(--color-page-bg)] py-6 text-[var(--color-text-muted)] sm:py-7">
        <div className="site-shell">
          <div className="max-w-2xl">
            <div className="mb-3 h-px w-10 bg-[var(--color-accent)]/65" aria-hidden="true" />
            <p className="text-base font-semibold tracking-wide text-[var(--color-text-primary)]">
              Y. Moeller Consulting GmbH & Co KG
            </p>
            <p className="mt-2 max-w-xl text-sm leading-5 text-[var(--color-text-secondary)]">
              Independent GMP auditing and consulting for pharmaceutical and biotech companies.
            </p>
            <p className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">
              © 2026 Y. Moeller Consulting GmbH & Co KG
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
