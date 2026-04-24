import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

const steps = ['Consultation & scope', 'Document review & preparation', 'On-site audit', 'Report, CAPA & follow-up']
const facilities = ['API', 'Finished dosage forms', 'Biologics', 'Sterile manufacturing', 'Peptide APIs', 'CMO/CDMO sites', 'Quality control labs', 'Warehousing & GDP']
const additional = [
  ['CAPA & follow-up', 'Review of corrective actions, effectiveness checks and implementation follow-up.'],
  ['Authority inspection support', 'Preparation and accompaniment for EDQM and EU authority audit situations.'],
  ['In-house GMP training', 'Focused training for quality teams, production teams and audit readiness.'],
  ['Consulting & documentation', 'Risk assessments, analytical method transfer, supplier qualification and DMF support.'],
]

function Services() {
  return (
    <>
      <PageHero eyebrow="Home / Services" title="GMP audit services for pharmaceutical manufacturers and suppliers.">
        <p>
          Worldwide audit and consulting support across EU GMP, ICH Q7, 21 CFR 210/211, GDP and
          GLP expectations, with particular strength in China and India.
        </p>
      </PageHero>

      <Section className="py-16">
        <p className="eyebrow text-[#185FA5]">Audit process</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-xl bg-[#F5F6F8] p-5 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#4AB8D8] text-sm font-semibold text-[#0D2240]">
                {index + 1}
              </div>
              <p className="mt-4 text-sm font-semibold text-[#0D2240]">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F5F6F8] py-16">
        <div className="overflow-hidden rounded-xl border border-[#E0E4EA] bg-white lg:grid lg:grid-cols-[0.33fr_0.67fr]">
          <div className="bg-[#0D2240] p-8 text-white">
            <p className="eyebrow text-[#4AB8D8]">Audit scope</p>
            <h2 className="mt-4 text-2xl font-medium">Manufacturing and quality system coverage</h2>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            {facilities.map((item) => (
              <div key={item} className="rounded-lg border border-[#E0E4EA] bg-white px-4 py-3 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-[#0D2240]">Regulatory frameworks</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {['EU GMP', 'FDA 21 CFR 210/211', 'ICH Q7', 'GDP', 'GLP'].map((item) => (
                <span key={item} className="tag-blue">{item}</span>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-[#0D2240]">Audit types</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Routine', 'For-cause', 'Remote', 'Mock inspection', 'Supplier qualification'].map((item) => (
                <span key={item} className="tag-blue">{item}</span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="py-16">
        <p className="eyebrow text-[#185FA5]">Additional services</p>
        <h2 className="section-title mt-3">Follow-through after the audit matters.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {additional.map(([title, text]) => (
            <Card key={title}>
              <h3 className="text-lg font-semibold text-[#0D2240]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Services
