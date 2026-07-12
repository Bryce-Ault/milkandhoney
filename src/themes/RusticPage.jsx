import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import { photos } from '../data/photos'

function RusticNav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav className="fixed top-10 left-0 right-0 z-[100] flex items-center justify-between px-10 py-[0.85rem] max-md:px-5 bg-[#3a5c45]">
      <div className="flex items-center gap-2">
        <span className="text-[1.4rem] text-[#e8d5b7]">&#9749;</span>
        <span className="text-[1rem] font-bold tracking-[0.02em] text-[#fef8ed]" style={{ fontFamily: 'Georgia, serif' }}>Milk and Honey</span>
      </div>
      <ul className="list-none flex gap-7 max-[480px]:gap-4">
        {[['menu','Menu'],['gallery','Gallery'],['find-us','Find Us']].map(([id,label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-[#e8d5b7] text-[0.85rem] tracking-[0.06em] uppercase cursor-pointer border-b border-transparent hover:text-[#c4622d] hover:border-[#c4622d] transition-all duration-200 pb-0.5"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-3 justify-center">
      <div className="w-10 h-px bg-[#c4622d]" />
      <span className="text-[#c4622d] text-sm">&#9749;</span>
      <div className="w-10 h-px bg-[#c4622d]" />
    </div>
  )
}

export default function RusticPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="bg-[#fef8ed] text-[#3d2b1f]" style={{ fontFamily: 'Georgia, serif' }}>
      <RusticNav />

      {/* Hero */}
      <section id="menu" className="relative min-h-screen flex flex-col items-center pt-10">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
            alt="Coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(72,36,12,0.72)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[900px] px-8 py-14 flex flex-col items-center gap-7 text-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#e8d5b7] mb-4">Est. — Morristown, Tennessee</p>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] text-[#fef8ed] leading-[1.1] [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
              Milk and Honey
            </h1>
            <div className="my-5">
              <Divider />
            </div>
            <p className="text-[#e8d5b7] text-[1.05rem] italic leading-[1.7]">
              Morristown's Favorite Pour — Crafted with Heart
            </p>
          </div>

          {/* Menu card */}
          <div className="w-full bg-[rgba(254,248,237,0.96)] rounded-xl px-10 py-8 max-[480px]:px-5 border-t-4 border-[#c4622d] shadow-[0_8px_40px_rgba(72,36,12,0.35)]">
            <h2 className="text-center text-[#c4622d] text-[1.5rem] tracking-[0.05em] mb-3">Our Menu</h2>
            <Divider />
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-6">
              {[['Drinks', menuItems.drinks], ['Food', menuItems.food]].map(([label, items]) => (
                <div key={label}>
                  <h3 className="text-[#3a5c45] text-[0.72rem] uppercase tracking-[0.15em] mb-4 pb-2 border-b border-[#e8d5b7]">{label}</h3>
                  <ul className="list-none flex flex-col gap-[0.5rem]">
                    {items.map(item => (
                      <li key={item.name}>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#3d2b1f] text-[0.93rem]">{item.name}</span>
                          <span className="text-[#c4622d] text-[0.88rem] font-bold shrink-0 ml-2">{item.price}</span>
                        </div>
                        <span className="text-[#8b6e52] text-[0.76rem] italic">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#f5ece0] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] text-[#3d2b1f] mb-4">A Little Taste of the Life</h2>
          <Divider />
        </div>
        <div className="columns-3 max-md:columns-2 max-[480px]:columns-1 gap-4 max-w-[1200px] mx-auto px-6">
          {photos.map((photo, i) => (
            <div
              key={photo.url}
              className="relative overflow-hidden rounded-[8px] mb-4 break-inside-avoid cursor-pointer shadow-[0_2px_10px_rgba(61,43,31,0.14)] transition-all duration-300 hover:shadow-[0_6px_26px_rgba(61,43,31,0.28)] hover:-translate-y-[3px] group"
              onClick={() => setLightbox(i)}
            >
              <img src={photo.url} alt={photo.alt} loading="lazy" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,43,31,0.75)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-[#fef8ed] text-[0.83rem] italic px-4 py-3">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
        {lightbox !== null && (
          <div className="fixed inset-0 z-[200] bg-[rgba(61,43,31,0.96)] flex items-center justify-center cursor-pointer" onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-6 text-[#fef8ed] text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity" onClick={() => setLightbox(null)}>&#10005;</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fef8ed] text-[3rem] px-4 py-2 opacity-55 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}>&#8249;</button>
            <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default" onClick={(e) => e.stopPropagation()}>
              <img src={photos[lightbox].url.replace('w=900','w=1400')} alt={photos[lightbox].alt} className="max-w-full max-h-[80vh] object-contain rounded-md" />
              <p className="text-[#c4622d] italic mt-3 text-base">{photos[lightbox].caption}</p>
            </div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fef8ed] text-[3rem] px-4 py-2 opacity-55 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}>&#8250;</button>
          </div>
        )}
      </section>

      {/* Quote strip */}
      <div
        className="relative h-[320px] bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[rgba(72,36,12,0.65)]" />
        <div className="relative z-[1] text-center px-8">
          <blockquote className="text-[clamp(1.1rem,2.5vw,1.8rem)] italic text-[#fef8ed] leading-[1.6] mb-5 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            "Good coffee is a pleasure. Good company is a treasure."
          </blockquote>
          <Divider />
          <p className="text-[0.75rem] text-[#e8d5b7] tracking-[0.1em] uppercase mt-4">Every cup poured with care — Morristown, TN</p>
        </div>
      </div>

      {/* Find Us */}
      <section id="find-us" className="bg-[#fef8ed] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] text-[#3d2b1f] mb-2">Find Us</h2>
          <p className="text-[#8b6e52] text-[0.98rem] italic mb-3">We're right in the heart of Morristown.</p>
        </div>
        <div className="grid grid-cols-[300px_1fr] max-md:grid-cols-1 gap-10 max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col gap-7">
            {[
              { label: '&#128205; Address', lines: ['247 W Main St', 'Morristown, TN 37814'] },
              { label: '&#128336; Hours', rows: [['Mon – Fri','6:30 am – 7:00 pm'],['Saturday','7:00 am – 8:00 pm'],['Sunday','8:00 am – 5:00 pm']] },
              { label: '&#128222; Contact', lines: ['(423) 555-0182','hello@roastedridge.com'] },
            ].map(block => (
              <div key={block.label}>
                <h3 className="text-[#3a5c45] text-[0.7rem] uppercase tracking-[0.15em] mb-3 pb-2 border-b border-[#e8d5b7]" dangerouslySetInnerHTML={{ __html: block.label }} />
                {block.lines?.map(l => <p key={l} className="text-[#3d2b1f] text-[0.93rem] leading-[1.7]">{l}</p>)}
                {block.rows?.map(([d,t]) => (
                  <div key={d} className="flex justify-between text-[#3d2b1f] text-[0.88rem] py-[0.3rem]">
                    <span>{d}</span><span>{t}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="h-[400px] max-md:h-[300px] rounded-xl overflow-hidden border-2 border-[#e8d5b7] shadow-[0_4px_20px_rgba(61,43,31,0.12)]">
            <iframe title="Milk and Honey Location" src="https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d1f12] text-center py-8 px-4">
        <div className="flex flex-col items-center gap-[0.5rem]">
          <Divider />
          <p className="text-[0.83rem] text-[#e8d5b7] mt-2">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
          <p className="text-[0.76rem] italic text-[#8b6e52]">Made with love (and a lot of espresso).</p>
        </div>
      </footer>
    </div>
  )
}
