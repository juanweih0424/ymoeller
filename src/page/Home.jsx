import homeHeroBackground from '../assets/home-hero-background.png'

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-section-bg)] pt-24 text-[var(--color-text-primary)] sm:pt-28">
        <div className="molecule-field" aria-hidden="true" />
        <div
          className="hero-molecule-backdrop"
          style={{ backgroundImage: `url(${homeHeroBackground})` }}
          aria-hidden="true"
        />
        <div className="content-shell grid gap-10 pb-12 pt-8 sm:gap-12 sm:pb-14 sm:pt-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="relative z-10">
            <h1 className="max-w-4xl text-[27px] font-medium leading-[1.16] sm:text-[40px] lg:text-[40px]">
              Your Independent Partner for{' '}
              <span className="text-[var(--color-accent)]">Global EU GMP and US FDA</span> Consulting and
              Auditing
            </h1>
            <div className="mt-5 max-w-[680px] space-y-4 text-[14px] leading-6 text-[var(--color-text-secondary)] sm:mt-7 sm:space-y-5 sm:text-[17px] sm:leading-8">
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
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a href="/services" className="btn-primary">
                Explore Services -&gt;
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden min-h-[480px] lg:block" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-section-bg-soft)]">
        <div className="content-shell grid grid-cols-2 divide-x divide-[var(--color-border)] py-6 sm:py-8 lg:grid-cols-4">
          {[
            ['50+', 'Sites Audited in China & India'],
            ['40-50', 'Audits Per Year, Worldwide'],
            ['30+', 'Successful Inspections'],
            ['EU/FDA', 'GMP Readiness Support'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-3 text-center">
              <p className="text-[22px] font-semibold leading-none text-[var(--color-accent)] sm:text-[28px]">{value}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.03em] text-[var(--color-text-muted)] sm:text-xs sm:tracking-[0.04em]">
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
