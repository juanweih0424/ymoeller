import Card from '../component/Card.jsx'
import Section from '../component/Section.jsx'
import contactHamburgOffice from '../assets/contact-hamburg-office.png'

const contactDetails = [
  { label: 'Telephone', value: '+49 40 8227 81 83', href: 'tel:+494082278183' },
  { label: 'Fax', value: '+49 40 8227 81 85' },
  { label: 'Mobile', value: '+49 170 58 88 528', href: 'tel:+491705888528' },
  { label: 'E-mail', value: 'info@ymoeller.com', href: 'mailto:info@ymoeller.com' },
]

const legalDetails = [
  ['Registration court', 'Amtsgericht Hamburg'],
  ['Commercial register', 'HRA 121460'],
  ['VAT ID', 'Ust.-ID.Nr. DE 311766278'],
  ['Managing Director', 'York Moeller'],
]

function Contact() {
  return (
    <Section className="bg-[#F6F9FC] pb-16 pt-24 sm:pt-32">
      <p className="eyebrow text-[#185FA5]">Contact & Imprint</p>
      <h1 className="section-title mt-3">Contact & Imprint</h1>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_48px_rgb(13_34_64_/_10%)]">
        <img
          src={contactHamburgOffice}
          alt="Elbphilharmonie Hamburg near the Y. Moeller Consulting office"
          className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[390px]"
        />
      </div>
      <div className="mt-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Card className="bg-[#F5F6F8]">
            <p className="eyebrow text-[#185FA5]">Office</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#0D2240]">
              Y. Moeller Consulting GmbH & Co KG
            </h2>
            <address className="mt-5 not-italic text-sm leading-7 text-slate-600">
              Am Kaiserkai 17
              <br />
              20457 Hamburg
            </address>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Include site location, product type, target market and preferred audit window when
              requesting scope clarification.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:info@ymoeller.com" className="btn-primary">
                E-mail now
              </a>
              <a href="tel:+494082278183" className="btn-outline-light">
                Call office
              </a>
            </div>
          </Card>
          <div className="grid gap-6">
            <Card>
              <p className="eyebrow text-[#185FA5]">Contact details</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#0D2240]">
                Phone, mobile and e-mail
              </h2>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {contactDetails.map((item) => (
                  <div key={item.label} className="rounded-lg border border-[#E0E4EA] p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#185FA5]">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      {item.href ? (
                        <a href={item.href} className="hover:text-[#185FA5]">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>

            <Card>
              <p className="eyebrow text-[#185FA5]">Imprint information</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {legalDetails.map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-[#F5F6F8] p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
