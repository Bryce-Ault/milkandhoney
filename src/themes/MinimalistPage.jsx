import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import { photos } from '../data/photos'
import SocialLinks from '../components/SocialLinks'

function MinNav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav className="sticky top-10 left-0 right-0 z-[100] flex items-center justify-between px-10 py-4 max-md:px-5 bg-[#fafaf8] border-b border-[#e5ddd5]" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div className="flex items-center gap-2">
        <span className="text-[1.3rem] text-[#92795a]">&#9749;</span>
        <span className="text-[1rem] font-bold tracking-[0.02em] text-[#1c1917]" style={{ fontFamily: 'Georgia, serif' }}>Milk and Honey</span>
      </div>
      <ul className="list-none flex gap-8 max-[480px]:gap-4">
        {[['menu','Menu'],['gallery','Gallery'],['find-us','Find Us']].map(([id,label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-[#3d3028] text-[0.82rem] tracking-[0.08em] uppercase cursor-pointer border-b border-transparent hover:border-[#92795a] hover:text-[#92795a] transition-all duration-200 pb-0.5"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function MinimalistPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="bg-[#f8f5f0] text-[#1c1917]" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <MinNav />

      {/* Hero — split layout */}
      <section id="menu" className="min-h-screen grid grid-cols-2 max-md:grid-cols-1 pt-10">

        {/* Left: text + menu */}
        <div className="flex flex-col justify-center px-14 max-md:px-8 pt-16 pb-16 bg-[#f8f5f0]">
          <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92795a] mb-6">Est. — Morristown, Tennessee</p>
          <h1
            className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] text-[#1c1917] mb-5"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Milk<br />and<br />Honey
          </h1>
          <div className="w-10 h-px bg-[#c8ac88] mb-6" />
          <p className="text-[0.98rem] text-[#6b5a4a] leading-[1.8] mb-10 max-w-[320px]">
            Morristown's favorite pour — crafted with care, served with warmth.
          </p>

          {/* Menu inline */}
          <div className="border-t border-[#e5ddd5] pt-8">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#92795a] mb-6">Our Menu</p>
            <div className="grid grid-cols-2 gap-x-8 max-[540px]:grid-cols-1">
              {[['Drinks', menuItems.drinks], ['Food', menuItems.food]].map(([label, items]) => (
                <div key={label}>
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[#b8a895] mb-3 border-b border-[#ece6de] pb-2">{label}</p>
                  {items.map(item => (
                    <div key={item.name} className="flex justify-between items-baseline py-[0.3rem] border-b border-[#f2ede8]">
                      <span className="text-[0.88rem] text-[#1c1917]">{item.name}</span>
                      <span className="text-[0.83rem] text-[#92795a] font-semibold shrink-0 ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: full-bleed image */}
        <div className="relative overflow-hidden min-h-[70vh] max-md:min-h-[320px] max-md:order-first">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85"
            alt="Coffee shop interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(248,245,240,0.08)]" />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#f8f5f0] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] text-[#1c1917] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            A Little Taste of the Life
          </h2>
          <div className="w-8 h-px bg-[#c8ac88] mx-auto" />
        </div>
        <div className="columns-3 max-md:columns-2 max-[480px]:columns-1 gap-3 max-w-[1200px] mx-auto px-6">
          {photos.map((photo, i) => (
            <div
              key={photo.url}
              className="relative overflow-hidden rounded-lg mb-3 break-inside-avoid cursor-pointer group transition-all duration-300 hover:shadow-[0_4px_20px_rgba(28,25,23,0.14)] hover:-translate-y-[2px]"
              onClick={() => setLightbox(i)}
            >
              <img src={photo.url} alt={photo.alt} loading="lazy" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-[rgba(28,25,23,0.52)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-[#f8f5f0] text-[0.83rem] italic px-4 py-3">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
        {lightbox !== null && (
          <div className="fixed inset-0 z-[200] bg-[rgba(28,25,23,0.95)] flex items-center justify-center cursor-pointer" onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-6 text-[#f8f5f0] text-[1.4rem] opacity-60 hover:opacity-100 transition-opacity" onClick={() => setLightbox(null)}>&#10005;</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f8f5f0] text-[3rem] px-4 py-2 opacity-50 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}>&#8249;</button>
            <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default" onClick={(e) => e.stopPropagation()}>
              <img src={photos[lightbox].url.replace('w=900','w=1400')} alt={photos[lightbox].alt} className="max-w-full max-h-[80vh] object-contain rounded" />
              <p className="text-[#92795a] italic mt-3 text-base">{photos[lightbox].caption}</p>
            </div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8f5f0] text-[3rem] px-4 py-2 opacity-50 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}>&#8250;</button>
          </div>
        )}
      </section>

      {/* Quote strip */}
      <div
        className="relative h-[300px] bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[rgba(28,25,23,0.62)]" />
        <div className="relative z-[1] text-center px-8">
          <blockquote className="text-[clamp(1.05rem,2.5vw,1.65rem)] italic text-[#f8f5f0] leading-[1.65] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            "Good coffee is a pleasure. Good company is a treasure."
          </blockquote>
          <span className="text-[0.75rem] text-[#c8ac88] tracking-[0.12em] uppercase">Every cup poured with care — Morristown, TN</span>
        </div>
      </div>

      {/* Find Us */}
      <section id="find-us" className="bg-[#f2ece4] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] text-[#1c1917] mb-2" style={{ fontFamily: 'Georgia, serif' }}>Find Us</h2>
          <p className="text-[#6b5a4a] text-[0.92rem] italic">We're right in the heart of Morristown.</p>
        </div>
        <div className="grid grid-cols-[300px_1fr] max-md:grid-cols-1 gap-10 max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col gap-7">
            {[
              { label: 'Address', lines: ['247 W Main St', 'Morristown, TN 37814'] },
              { label: 'Hours', rows: [['Mon – Fri','6:30 am – 7:00 pm'],['Saturday','7:00 am – 8:00 pm'],['Sunday','8:00 am – 5:00 pm']] },
              { label: 'Contact', lines: ['(423) 555-0182','hello@roastedridge.com'] },
            ].map(block => (
              <div key={block.label}>
                <h3 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#92795a] mb-3 pb-2 border-b border-[#ddd5c8]">{block.label}</h3>
                {block.lines?.map(l => <p key={l} className="text-[#3d3028] text-[0.92rem] leading-[1.7]">{l}</p>)}
                {block.rows?.map(([d,t]) => (
                  <div key={d} className="flex justify-between text-[#3d3028] text-[0.88rem] py-[0.3rem]">
                    <span>{d}</span><span>{t}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="h-[400px] max-md:h-[300px] rounded-xl overflow-hidden border border-[#ddd5c8] shadow-sm">
            <iframe title="Milk and Honey Location" src="https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1917] text-center py-8 px-4">
        <div className="flex flex-col items-center gap-[0.4rem]">
          <span className="text-[1.5rem] text-[#c8ac88]">&#9749;</span>
          <SocialLinks color="#9c8c7a" hoverColor="#c8ac88" />
          <p className="text-[0.83rem] text-[#9c8c7a]">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
          <p className="text-[0.76rem] italic text-[#5a4d40]">Made with love (and a lot of espresso).</p>
        </div>
      </footer>
    </div>
  )
}
