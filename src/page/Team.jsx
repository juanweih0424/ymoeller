import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

const people = [
  {
    initials: 'YM',
    name: 'York Moeller',
    role: 'Managing Director & Lead Auditor',
    bio: '35+ years in the pharmaceutical industry across Germany, China and the USA. Managing Director of Y. Moeller Consulting since 2007, conducting 40-50 audits annually worldwide.',
    tags: ['EU GMP', 'ICH Q7', '21 CFR 210/211', 'GDP', 'APIC Certified GMP Auditor'],
  },
  {
    initials: 'AL',
    name: 'Amy Liu',
    role: 'Auditor, Translator & China Liaison',
    bio: 'Based in China, bilingual in Chinese and English, and working with Mr. Moeller since 2019. Her responsibilities have expanded to include independent audit and authority inspection support.',
    tags: ['China liaison', 'Native Chinese', 'Audit support', 'Interpreter', 'Site coordination'],
  },
]

function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title="Direct senior involvement from a compact GMP audit team.">
        <p>
          Prospective clients work directly with the people responsible for the audit, reporting,
          follow-up and site communication.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {people.map((person) => (
            <Card key={person.name} className="overflow-hidden p-0">
              <div className="team-band">
                <div className="avatar">{person.initials}</div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{person.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#8FDEF0]">{person.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-slate-600">{person.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span key={tag} className="tag-blue">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Team
