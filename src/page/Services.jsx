import Card from '../component/Card.jsx'
import Section from '../component/Section.jsx'
import servicesAuditScene from '../assets/services-gmp-audit-scene.png'

const services = [
  [
    'GMP Audits & Supplier Qualification',
    'Worldwide audits per EU GMP, ICH Q7, 21 CFR 210/211, GDP, and GLP - covering API, FDF, biologics, peptide API, sterile manufacturing, excipients, and packaging sites. Routine, for-cause, remote, follow-up, and mock authority inspections.',
  ],
  [
    'Inspection Preparation & Authority Support',
    'Site preparation and accompaniment for EDQM and EU national authority inspections. CAPA evaluation, follow-up audits, and response strategy support following inspection observations.',
  ],
  [
    'Regulatory Gap Analysis',
    'Chapter-by-chapter compliance gap analysis against FDA 21 CFR 210/211, EU GMP, ICH Q7, Q10, and Q11 - with each gap classified by severity, recommended corrective action, and estimated remediation effort. Dual EU + FDA analysis available.',
  ],
  [
    'Advanced Therapeutics',
    'Specialized auditing and compliance consulting for monoclonal antibodies, ADCs, bispecific antibodies, GLP-1 peptide APIs, and other innovative drug modalities at China-based CDMO and CMO sites.',
  ],
  [
    'US Investor Services - China Platform Assessment',
    'Independent, investor-aligned due diligence for life sciences funds and biopharma partnerships, including pre-investment GMP assessment, gap analysis, periodic platform audits, ongoing compliance monitoring, and pipeline asset GMP readiness reviews.',
  ],
  [
    'Training & Consulting',
    'In-house GMP training in German, English, or Chinese. Risk assessments, DMF preparation, analytical method transfer, quality issue resolution, and regulatory strategy consulting for manufacturers targeting EU or US markets.',
  ],
  [
    'Translation Services',
    'Professional pharmaceutical and scientific translation between German, English, and Chinese - including regulatory documents, audit reports, SOPs, batch records, and technical dossiers. Official interpretation for authority GMP inspections conducted in China.',
  ],
]

function Services() {
  return (
    <Section className="bg-[#F6F9FC] pb-16 pt-32">
      <p className="eyebrow text-[#185FA5]">Our Services</p>
      <h1 className="section-title mt-3">Our Services</h1>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_48px_rgb(13_34_64_/_10%)]">
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
