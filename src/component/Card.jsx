function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-[#E0E4EA] bg-white p-5 shadow-[0_12px_28px_rgba(13,34,64,0.05)] ${className}`}>
      {children}
    </div>
  )
}

export default Card
