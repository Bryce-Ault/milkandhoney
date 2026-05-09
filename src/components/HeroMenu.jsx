const menuItems = {
  drinks: [
    { name: 'Espresso', price: '$3.50', desc: 'Rich, bold single shot' },
    { name: 'Americano', price: '$4.00', desc: 'Espresso with hot water' },
    { name: 'Latte', price: '$5.25', desc: 'Espresso & steamed milk' },
    { name: 'Cappuccino', price: '$5.00', desc: 'Equal parts espresso, milk & foam' },
    { name: 'Cold Brew', price: '$5.50', desc: '24-hour slow-steeped blend' },
    { name: 'Chai Latte', price: '$5.00', desc: 'Spiced tea with steamed milk' },
    { name: 'Hot Chocolate', price: '$4.50', desc: 'Rich dark chocolate blend' },
    { name: 'Matcha Latte', price: '$5.75', desc: 'Ceremonial grade matcha' },
  ],
  food: [
    { name: 'Butter Croissant', price: '$3.50', desc: 'Flaky, golden French-style' },
    { name: 'Blueberry Muffin', price: '$3.75', desc: 'Bursting with fresh blueberries' },
    { name: 'Avocado Toast', price: '$8.50', desc: 'Sourdough, avo, everything bagel seasoning' },
    { name: 'Bagel & Cream Cheese', price: '$5.00', desc: 'Plain or everything bagel' },
    { name: 'Breakfast Sandwich', price: '$9.00', desc: 'Egg, cheddar & choice of meat' },
    { name: 'Banana Bread', price: '$3.50', desc: 'House-baked, walnut-studded' },
  ],
}

export default function HeroMenu() {
  return (
    <section id="menu" className="hero-menu">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
          alt="Coffee shop interior"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-headline">
          <h1>Milk and Honey</h1>
          <p className="tagline">Morristown's Favorite Pour — Crafted with Heart</p>
        </div>

        <div className="menu-container" id="menu-section">
          <h2 className="menu-title">Our Menu</h2>

          <div className="menu-columns">
            <div className="menu-column">
              <h3>Drinks</h3>
              <ul className="menu-list">
                {menuItems.drinks.map((item) => (
                  <li key={item.name} className="menu-item">
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <span className="menu-item-desc">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-column">
              <h3>Food</h3>
              <ul className="menu-list">
                {menuItems.food.map((item) => (
                  <li key={item.name} className="menu-item">
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <span className="menu-item-desc">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
