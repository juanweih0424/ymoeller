import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

const bullets = [
  'GMP auditing for biologic API and drug product facilities in China',
  'Compliance review across ICH Q7, Q10 and Q11 expectations',
  'Qualification of Chinese CDMOs for US and EU oncology submissions',
  'Data integrity and quality system assessments for biologics manufacturers',
  'Supplier readiness support from development stage to commercial scale',
  'Practical communication bridge for technical site discussions',
]

function AdvancedTherapeutics() {
  return (
    <>
      <PageHero
        eyebrow="Advanced Therapeutics"
        title="China-based biologics, peptide API and FDA readiness support."
        chips={['mAb · ADC / Oncology biologics', 'GLP-1 / Peptide APIs', '21 CFR / FDA compliance in China']}
      >
        <p>
          Support for US and European biopharma companies qualifying China-based CMOs and CDMOs
          for complex development and manufacturing programs.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="overflow-hidden rounded-xl border border-[#E0E4EA] bg-white">
          <div className="bg-gradient-to-r from-[#0D2240] to-[#185FA5] p-7 text-white">
            <p className="eyebrow text-[#8FDEF0]">Biologics & oncology</p>
            <h2 className="mt-3 text-2xl font-medium">Antibodies, ADCs, mAbs and oncology supply chains</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">
              Audit planning and quality system review for high-complexity products where site
              readiness, documentation, data integrity and market expectations need to align.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['mAb', 'ADC', 'IgG', 'Bispecific', 'Oncology'].map((item) => (
                <span key={item} className="tag-light">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 p-6 md:grid-cols-2">
            {bullets.map((item) => (
              <p key={item} className="rounded-lg bg-[#F5F6F8] p-4 text-sm leading-7 text-slate-650">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F5F6F8] py-16">
        <div className="overflow-hidden rounded-xl border border-[#D7E7E1] bg-white">
          <div className="bg-gradient-to-r from-[#0D2240] to-[#2A8F77] p-7 text-white">
            <p className="eyebrow text-[#A5F0D6]">Peptides & weight management</p>
            <h2 className="mt-3 text-2xl font-medium">GLP-1 and next-generation peptide API suppliers</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">
              Supplier qualification and scale-up support for companies sourcing peptide APIs
              from China, including dual EU GMP and FDA readiness considerations.
            </p>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-2">
            {['Peptide API manufacturer audits in China', '21 CFR and EU GMP dual-compliance consulting', 'Supplier qualification for weight management compounds', 'Clinical-to-commercial manufacturing scale-up support'].map((item) => (
              <p key={item} className="rounded-lg border border-[#5DCAA5]/25 bg-[#5DCAA5]/8 p-4 text-sm font-medium text-[#175C4D]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <p className="eyebrow text-[#185FA5]">FDA compliance grid</p>
        <h2 className="section-title mt-3">US-facing support for China manufacturing platforms.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {[
            ['21 CFR 210/211', 'Gap analysis against FDA drug manufacturing expectations and practical inspection readiness needs.'],
            ['IND / NDA / ANDA', 'Supplier qualification documentation support for development and submission packages.'],
            ['Dual-market', 'Bridging EU GMP and FDA expectations when a site targets more than one approval pathway.'],
            ['CDMO qualification', 'Audit and quality system review for China-based contract development and manufacturing partners.'],
          ].map(([badge, text]) => (
            <Card key={badge}>
              <span className="tag-blue">{badge}</span>
              <p className="mt-5 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#0D2240] py-16 text-white">
        <p className="eyebrow text-[#4AB8D8]">Why choose us</p>
        <h2 className="section-title mt-3 max-w-3xl text-white">A practical bridge between technical sites and regulated-market expectations.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {['Dual regulatory fluency', 'Permanent China presence', 'Advanced drug expertise', 'Real-time language bridge', '35+ years in China', 'Authority inspection track record'].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-[#8FDEF0]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Focused support for audit preparation, technical communication and follow-up in complex manufacturing contexts.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <p className="eyebrow text-[#185FA5]">Anonymous case examples</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ['Oncology biologics · China CDMO', 'Supported qualification of a Chinese CDMO for mAb intermediate manufacturing, including 21 CFR 211 gap analysis and PAI preparation.'],
            ['Peptide API · Remote audit', 'Conducted remote audit support for a Chinese peptide API manufacturer during COVID-19, with China-based site verification.'],
            ['Authority inspection · API facility', 'Supported a German authority GMP inspection at a Chinese API facility with real-time communication support.'],
          ].map(([label, text]) => (
            <div key={label} className="border-l-4 border-[#4AB8D8] bg-[#EAF8FC] p-5">
              <p className="eyebrow text-[#185FA5]">{label}</p>
              <p className="mt-4 text-sm italic leading-7 text-slate-650">{text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default AdvancedTherapeutics
