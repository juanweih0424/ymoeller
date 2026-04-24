import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

function Qualifications() {
  return (
    <>
      <PageHero eyebrow="Qualifications" title="Visible credentials for regulated pharmaceutical audit work.">
        <p>
          The site now surfaces the key qualifications that were previously hidden behind
          “available upon request” language.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ['Certified audit capability', 'APIC Certified GMP Auditor and ECA Certified Quality Control Manager credentials.'],
            ['Regulatory expertise', 'Practical experience across EU GMP, ICH Q7, 21 CFR 210/211, GDP and investigational drug guidelines.'],
            ['Conference presence', 'Regular speaker activity at ECA and Concept Heidelberg forums, including QP-focused topics.'],
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-xl font-semibold text-[#0D2240]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F5F6F8] py-16">
        <p className="eyebrow text-[#185FA5]">Authority inspection support</p>
        <h2 className="section-title mt-3">Experience supporting inspections in China.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['EDQM', 'Hamburg authority', 'Tubingen authority'].map((item) => (
            <Card key={item}>
              <p className="text-2xl font-semibold text-[#185FA5]">{item}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Inspection preparation, communication and on-site support context.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Qualifications
