function PageHero({ eyebrow, title, children, chips = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0D2240] pt-28 text-white">
      <div className="molecule-field" aria-hidden="true" />
      <div className="content-shell pb-16 pt-6 lg:pb-20">
        <p className="eyebrow text-[#4AB8D8]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-3xl text-base leading-8 text-white/72">{children}</div>
        {chips.length ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#4AB8D8]/45 bg-[#4AB8D8]/10 px-4 py-2 text-xs font-semibold text-[#8FDEF0]"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageHero
