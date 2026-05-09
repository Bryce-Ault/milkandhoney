export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">&#9749;</span>
        <span className="brand-name">Milk and Honey</span>
      </div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollTo('menu')}>Menu</button></li>
        <li><button onClick={() => scrollTo('gallery')}>Gallery</button></li>
        <li><button onClick={() => scrollTo('find-us')}>Find Us</button></li>
      </ul>
    </nav>
  )
}
