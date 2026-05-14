export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-[0.9rem] max-md:px-5 max-md:py-[0.8rem] bg-[rgba(20,10,4,0.82)] backdrop-blur-[8px]">
      <div className="flex items-center gap-2">
        <span className="text-[1.6rem]">&#9749;</span>
        <span className="text-[1.1rem] max-md:text-[0.9rem] font-bold tracking-[0.03em] text-tan">Milk and Honey</span>
      </div>
      <ul className="list-none flex gap-7 max-[480px]:gap-4">
        {[['menu', 'Menu'], ['gallery', 'Gallery'], ['find-us', 'Find Us']].map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="cursor-pointer text-tan text-[0.95rem] font-[inherit] tracking-[0.05em] uppercase py-1 border-b border-transparent transition-all duration-200 hover:text-gold hover:border-gold"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
