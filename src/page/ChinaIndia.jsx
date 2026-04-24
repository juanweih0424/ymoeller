import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

function ChinaIndia() {
  return (
    <>
      <PageHero eyebrow="China & India Focus" title="Local manufacturing context, global GMP expectations.">
        <p>
          The company’s Asia experience reaches back to 1990, combining direct industry knowledge,
          on-the-ground China capability and regulated-market audit expectations.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ['Asia experience since 1990', 'Long-standing work with pharmaceutical operations and suppliers across China and India.'],
            ['China-based liaison', 'Amy Liu provides native Chinese communication, site coordination and independent audit capability.'],
            ['EU/FDA expectations', 'Audit work connects local operating realities with EU GMP, ICH Q7 and FDA expectations.'],
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-xl font-semibold text-[#0D2240]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F5F6F8] py-16">
        <p className="eyebrow text-[#185FA5]">Differentiator</p>
        <h2 className="section-title mt-3 max-w-3xl">
          Technical discussions are stronger when language and GMP context are handled together.
        </h2>
        <p className="section-copy mt-5 max-w-3xl">
          For supplier audits in China, fluent communication can change the quality of the audit
          conversation. The team can clarify technical detail, quality decisions and site responses
          without relying only on external interpretation.
        </p>
      </Section>
    </>
  )
}

export default ChinaIndia
