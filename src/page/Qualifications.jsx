import Section from '../component/Section.jsx'
import qualificationsGmpAudit from '../assets/qualifications-gmp-audit.png'

function Qualifications() {
  return (
    <>
      <Section className="bg-[var(--color-content-bg)] pb-16 pt-24 sm:pt-32">
        <h1 className="section-title uppercase">QUALIFICATIONS</h1>
        <div className="mt-8 overflow-hidden rounded-lg border border-[#D5E0EA] bg-[var(--color-content-surface)] shadow-[0_18px_48px_rgb(13_34_64_/_12%)]">
          <img
            src={qualificationsGmpAudit}
            alt="GMP auditor reviewing pharmaceutical quality documentation in a laboratory setting"
            className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[390px]"
          />
        </div>
        <p className="mt-10 whitespace-normal text-xl font-medium leading-relaxed text-[#0D2240] sm:text-2xl lg:whitespace-nowrap">
          Need further certificates or a detailed CV? Contact us directly at{' '}
          <a href="mailto:info@ymoeller.com" className="text-[#185FA5] hover:text-[#0D2240]">
            info@ymoeller.com
          </a>
          .
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          We will provide the specific qualification documentation relevant to your request.
        </p>
      </Section>

    </>
  )
}

export default Qualifications
