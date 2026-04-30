import Card from '../component/Card.jsx'
import Section from '../component/Section.jsx'

const services = [
  ['GMP audits worldwide', 'EU GMP, ICH Q7, FDA 21 CFR, GDP and GLP audits for pharmaceutical manufacturers.'],
  ['CAPA & follow-up', 'Evaluation of corrective actions, implementation follow-up, spot checks, and for-cause audits.'],
  ['Authority inspection support', 'Preparation and on-site communication support for EDQM and EU authority inspections.'],
  ['Gap analysis & follow-up', 'FDA 21 CFR, EU GMP, ICH Q7/Q10/Q11 gap analysis, CAPA review, and remediation support.'],
]

const metrics = [
  ['50+', 'Sites audited', 'Chinese and Indian sites successfully guided through EU GMP audits.'],
  ['2012', 'Asia GMP work', 'Ongoing support for API and FDF facilities in China and India.'],
  ['3', 'Authority contexts', 'Inspection support involving EDQM, Hamburg and Tubingen authorities.'],
  ['2007', 'Independent firm', 'Y. Moeller Consulting has operated independently since this year.'],
]

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0D2240] pt-28 text-white">
        <div className="molecule-field" aria-hidden="true" />
        <div className="content-shell grid gap-10 pb-8 pt-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 pb-10">
            <span className="rounded-full border border-[#4AB8D8]/30 bg-[#4AB8D8]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8FDEF0]">
              Independent GMP Auditing & Consulting
            </span>
            <h1 className="mt-7 max-w-5xl text-4xl font-medium leading-tight sm:text-5xl lg:text-[56px]">
              Your independent partner for{' '}
              <span className="text-[#4AB8D8]">global GMP/FDA</span> consulting and auditing
            </h1>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-white/74">
              <p>
                Y. Moeller Consulting is supporting you to prepare companies to fulfill GMP
                requirements according to EU GMP and US FDA standards. The spectrum of work covered
                starting materials to finished dosage forms, from Drug Substance to Drug Product,
                including Investigational Drugs.
              </p>
              <p>
                The support is from Quality Audits to enable Qualified Persons to release a batch
                for a clinical trial, routine GMP audits to supporting plants to prepare and pass EU
                GMP and US FDA inspections. During the past 15 years we had more than 30 successful
                regulatory inspections, and all passed.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/services" className="btn-secondary">
                Our services
              </a>
            </div>
          </div>
          <div className="relative z-10 hidden items-end justify-center lg:flex">
            <div className="scientific-visual" aria-hidden="true">
              <div className="visual-grid" />
              <div className="document-panel">
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

      <section className="border-y border-white/10 bg-[#081628] text-white">
        <div className="content-shell grid grid-cols-2 divide-x divide-white/10 py-5 lg:grid-cols-4">
          {[
            ['50+', 'Sites audited in China & India'],
            ['40-50', 'Audits per year, worldwide'],
            ['30+', 'Successful inspections'],
            ['EU/FDA', 'GMP readiness support'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-3 text-center">
              <p className="text-2xl font-semibold text-[#4AB8D8]">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-white/68">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section className="bg-[#F6F9FC] py-16">
        <p className="eyebrow text-[#185FA5]">What we do</p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <h2 className="section-title">Focused GMP audit support for regulated supply chains.</h2>
          <p className="section-copy">
            Services support quality audits, qualified person release decisions, routine GMP
            programs, regulatory inspection readiness, and CAPA follow-up.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, text], index) => (
            <Card key={title}>
              <div className={`icon-square tone-${index + 1}`}>{index + 1}</div>
              <h3 className="mt-5 text-base font-semibold text-[#0D2240]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F6F9FC] py-16">
        <p className="eyebrow text-[#185FA5]">Track record</p>
        <h2 className="section-title mt-3">Credibility without naming confidential clients.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label, description]) => (
            <Card key={label}>
              <p className="text-3xl font-semibold text-[#185FA5]">{value}</p>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#0D2240]">
                {label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Home
