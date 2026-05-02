function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-section-bg)] pt-28 text-[var(--color-text-primary)]">
        <div className="molecule-field" aria-hidden="true" />
        <div className="content-shell grid gap-12 pb-14 pt-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="relative z-10">
            <h1 className="max-w-4xl text-[34px] font-medium leading-[1.12] sm:text-[40px] lg:text-[40px]">
              Your Independent Partner for{' '}
              <span className="text-[var(--color-accent)]">Global EU GMP and US FDA</span> Consulting and
              Auditing
            </h1>
            <div className="mt-7 max-w-[680px] space-y-5 text-[17px] leading-8 text-[var(--color-text-secondary)]">
              <p>
                Y. Moeller Consulting supports pharmaceutical and biotech companies in achieving
                and maintaining GMP compliance with EU GMP and US FDA standards. We cover the full
                development and manufacturing spectrum - from starting materials and Drug Substance
                through to finished Drug Product and Investigational Medicinal Products.
              </p>
              <p>
                Our services range from quality audits enabling Qualified Persons to release
                clinical trial batches, to routine GMP audits and comprehensive preparation for EU
                GMP and FDA regulatory inspections. Over the past 15 years, we have supported more
                than 30 regulatory inspections - with a 100% pass rate.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/services" className="btn-primary">
                Explore Services -&gt;
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="visual-glow" aria-hidden="true" />
            <div className="scientific-visual" aria-hidden="true">
              <div className="readiness-badge">EU/FDA readiness</div>
              <div className="visual-grid" />
              <div className="document-panel">
                <p>GMP audit trail</p>
                <span />
                <span />
                <span />
                <div className="check-row">check CAPA verified</div>
                <div className="check-row">check QP release ready</div>
              </div>
              <div className="audit-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="orbital orbital-one" />
              <div className="orbital orbital-two" />
              <div className="orbital orbital-three" />
              <div className="protein-chain" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-section-bg-soft)]">
        <div className="content-shell grid grid-cols-2 divide-x divide-[var(--color-border)] py-8 lg:grid-cols-4">
          {[
            ['50+', 'Sites Audited in China & India'],
            ['40-50', 'Audits Per Year, Worldwide'],
            ['30+', 'Successful Inspections'],
            ['EU/FDA', 'GMP Readiness Support'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-3 text-center">
              <p className="text-[28px] font-semibold leading-none text-[var(--color-accent)]">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
