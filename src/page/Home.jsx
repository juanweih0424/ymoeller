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
                Y. Moeller Consulting supports pharmaceutical and biotech companies in achieving and maintaining GMP compliance with EU GMP and US FDA standards. 
                We cover all quality aspects of the the development and manufacturing spectrum - from starting materials and Drug Substance to Drug Product, inlcuding Investigational New Drug (IND). 
              </p>
              <p>
                Our services range from quality audits enabling Qualified Persons to release clinical trial batches, to routine GMP audits and comprehensive preparation for EU GMP and FDA regulatory inspections. 
                Over the past 15 years, we have supported more than 35 regulatory inspections. 
              </p>
            </div>
          </div>
          <div className="hidden min-h-[480px] lg:block" aria-hidden="true" />
        </div>
      </section>
    </>
  )
}

export default Home
