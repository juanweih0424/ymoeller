function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-[#D5E0EA] bg-[var(--color-content-surface)] p-5 shadow-[0_12px_28px_rgba(13,34,64,0.07)] ${className}`}>
      {children}
    </div>
  )
}

export default Card
