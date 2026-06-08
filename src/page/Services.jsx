import Card from '../component/Card.jsx'
import Section from '../component/Section.jsx'
import servicesAuditScene from '../assets/services-gmp-audit-scene.png'

const services = [
  [
    'GMP Audits & Supplier Qualification',
    'Worldwide audits per EU GMP, 21 CFR 210/211, GDP, and GLP - covering DS, DP, biologics, sterile manufacturing, excipients, and packaging material. Routine, for-cause,  follow-up, and mock authority inspections.',
  ],
  [
    'Inspection Preparation & Authority Support',
    'Site preparation and accompaniment for EU national authority inspections. Translations, CAPA evaluation, follow-up audits, and response strategy support following inspection observations.',
  ],
  [
    'Training & Consulting',
    'In-house GMP training in German, English, or Chinese. including risk assessments, Contamination Control Strategies (CCS), DMF preparation, analytical method transfer, quality issue resolution, supplier qualification etc.',
  ],
  [
    'Translation Services',
    'Professional pharmaceutical and scientific translation between German, English, and Chinese - including regulatory documents, audit reports, SOPs, batch records, and technical dossiers. Official interpretation for authority GMP inspections conducted in China.',
  ],
]

function Services() {
  return (
    <Section className="bg-[var(--color-content-bg)] pb-16 pt-32">
      <h1 className="section-title uppercase">OUR SERVICES</h1>
      <div className="mt-8 overflow-hidden rounded-lg border border-[#D5E0EA] bg-[var(--color-content-surface)] shadow-[0_18px_48px_rgb(13_34_64_/_12%)]">
        <img
          src={servicesAuditScene}
          alt="GMP auditors reviewing quality documentation in a pharmaceutical manufacturing facility"
          className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[390px]"
        />
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {services.map(([title, text], index) => (
          <Card key={title}>
            <div className={`icon-square tone-${(index % 4) + 1}`}>{index + 1}</div>
            <h2 className="mt-5 text-lg font-semibold text-[#0D2240]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Services
