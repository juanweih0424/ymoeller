import Card from '../component/Card.jsx'
import PageHero from '../component/PageHero.jsx'
import Section from '../component/Section.jsx'

const posts = [
  ['Conference activity', 'Upcoming and recent GMP forums, ECA sessions and Concept Heidelberg events can be listed here.'],
  ['Regulatory updates', 'Short notes on EU GMP Annex 1, ICH Q7, FDA import alerts and data integrity expectations.'],
  ['Supplier qualification', 'Practical observations for auditing China-based CMOs, CDMOs and API manufacturers.'],
]

function News() {
  return (
    <>
      <PageHero eyebrow="News & Insights" title="A simple static insights area for credibility and SEO.">
        <p>
          For now this can remain frontend-only. Each item can be edited in code until the client
          needs a CMS or admin workflow.
        </p>
      </PageHero>

      <Section className="py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map(([title, text]) => (
            <Card key={title}>
              <p className="eyebrow text-[#185FA5]">Insight</p>
              <h2 className="mt-4 text-xl font-semibold text-[#0D2240]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default News
