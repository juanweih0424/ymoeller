function Section({ children, className = '', innerClassName = '', ...props }) {
  return (
    <section className={className} {...props}>
      <div className={`content-shell ${innerClassName}`}>{children}</div>
    </section>
  )
}

export default Section
