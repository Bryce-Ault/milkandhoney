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

function MenuItem({ item }) {
  return (
    <li className="flex flex-col gap-[0.2rem]">
      <div className="flex justify-between items-baseline">
        <span className="text-cream text-[1.05rem] font-bold">{item.name}</span>
        <span className="text-gold text-base font-bold shrink-0">{item.price}</span>
      </div>
      <span className="text-muted text-[0.85rem] italic">{item.desc}</span>
    </li>
  )
}

export default function HeroMenu() {
  return (
    <section id="menu" className="relative min-h-screen flex flex-col items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
          alt="Coffee shop interior"
          className="w-full h-full object-cover object-center brightness-[0.45] saturate-[1.1]"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(58,38,8,0.3) 0%, rgba(58,38,8,0.55) 40%, rgba(58,38,8,0.75) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] w-full max-w-[1100px] px-8 pt-[7rem] pb-12 flex flex-col items-center gap-10">
        {/* Headline */}
        <div className="text-center">
          <h1 className="text-cream text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] mb-2">
            Milk and Honey
          </h1>
          <p className="text-gold text-[1.15rem] tracking-[0.06em] italic">
            Morristown's Favorite Pour — Crafted with Heart
          </p>
        </div>

        {/* Menu Card */}
        <div className="w-full bg-[rgba(74,50,8,0.78)] backdrop-blur-[12px] border border-[rgba(212,169,106,0.25)] rounded-2xl px-12 py-10 max-[480px]:px-5 max-[480px]:py-6">
          <h2 className="text-center text-gold text-[1.8rem] tracking-[0.1em] uppercase mb-3">Our Menu</h2>
          <div className="w-[60px] h-[2px] bg-gold mx-auto mb-8" />

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8">
            <div>
              <h3 className="text-gold text-base uppercase tracking-[0.15em] mb-5 pb-[0.4rem] border-b border-[rgba(212,169,106,0.3)]">
                Drinks
              </h3>
              <ul className="list-none flex flex-col gap-4">
                {menuItems.drinks.map((item) => <MenuItem key={item.name} item={item} />)}
              </ul>
            </div>
            <div>
              <h3 className="text-gold text-base uppercase tracking-[0.15em] mb-5 pb-[0.4rem] border-b border-[rgba(212,169,106,0.3)]">
                Food
              </h3>
              <ul className="list-none flex flex-col gap-4">
                {menuItems.food.map((item) => <MenuItem key={item.name} item={item} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
