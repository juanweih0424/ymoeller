import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy information for website visitors.">
        <p>
          This frontend-only website presents company information and direct contact links. No
          account system or custom backend data storage is used.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-[#0D2240]">Contact by e-mail or phone</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              When visitors contact Y. Moeller Consulting directly, the information provided is
              used to respond to the inquiry and clarify the requested audit or consulting scope.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-[#0D2240]">Analytics and hosting</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If analytics or hosting logs are enabled during deployment, the final policy should
              be updated to name those providers and describe the data they process.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Privacy
