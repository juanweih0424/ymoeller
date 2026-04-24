import Card from '../component/Card.jsx'
import Section from '../component/Section.jsx'

const services = [
  ['GMP audits worldwide', 'EU GMP, ICH Q7, FDA 21 CFR, GDP and GLP audits for pharmaceutical manufacturers.'],
  ['CAPA & follow-up', 'Evaluation of corrective actions, implementation follow-up, spot checks and for-cause audits.'],
  ['Authority inspection support', 'Preparation and on-site communication support for EDQM and EU authority inspections.'],
  ['Training & consulting', 'In-house GMP training, risk assessments, method transfer and supplier qualification support.'],
]

const specialties = [
  ['Biologics & Oncology', 'Audit support for antibodies, ADCs, mAbs and high-complexity oncology supply chains.', 'Antibodies - ADCs - mAbs'],
  ['Peptides & Weight Management', 'Supplier qualification and scale-up support for peptide APIs and GLP-1 programs.', 'GLP-1 - Peptide APIs'],
  ['US FDA Compliance in China', '21 CFR gap analysis and PAI readiness for China-based CMOs and CDMOs.', '21 CFR - IND - NDA'],
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
            <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl lg:text-[56px]">
              GMP compliance expertise
              <br />
              for <span className="text-[#4AB8D8]">China & India</span> under
              <br />
              EU and FDA standards
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74">
              Y. Moeller Consulting supports pharmaceutical and biotech companies with GMP
              audits, supplier qualification, inspection preparation and regulatory quality
              consulting. The team combines long-standing Asia experience with practical EU GMP,
              ICH Q7 and 21 CFR knowledge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary">
                Request an audit
              </a>
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
            ['35+', 'Years in Asia & pharma'],
            ['EU/FDA', 'Regulatory audit expertise'],
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
            Services are structured around practical audit execution: scope definition, document
            review, on-site or remote audit work, reporting, CAPA evaluation and follow-up.
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

      <Section className="bg-[#0D2240] py-8 text-white">
        <p className="eyebrow text-[#4AB8D8]">Advanced therapeutics</p>
        <h2 className="mt-2 max-w-5xl text-3xl font-medium leading-tight text-white sm:text-4xl">
          Specialized support for biologics, peptides and China-based CDMOs.
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {specialties.map(([title, text, tag]) => (
            <div key={title} className="rounded-xl border border-[#4AB8D8]/30 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-[#8FDEF0]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
              <p className="mt-6 rounded-full bg-[#4AB8D8]/12 px-3 py-2 text-xs font-semibold text-[#8FDEF0]">
                {tag}
              </p>
            </div>
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
