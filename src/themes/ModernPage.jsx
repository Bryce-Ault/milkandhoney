import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import { photos } from '../data/photos'
import SocialLinks from '../components/SocialLinks'

function ModernNav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav
      className="sticky top-10 left-0 right-0 z-[100] flex items-center justify-between px-10 py-4 max-md:px-5 bg-[#0a0a0a] border-b border-[#181818]"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      <div className="flex items-center gap-3">
        <div className="w-[3px] h-6 bg-[#e07b39]" />
        <span className="text-white text-[0.95rem] font-bold tracking-[0.07em] uppercase">Milk and Honey</span>
      </div>
      <ul className="list-none flex gap-8 max-[480px]:gap-5">
        {[['menu','Menu'],['gallery','Gallery'],['find-us','Find Us']].map(([id,label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-[#666] text-[0.78rem] tracking-[0.1em] uppercase cursor-pointer hover:text-[#e07b39] transition-colors duration-200"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function ModernPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="bg-[#0a0a0a] text-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <ModernNav />

      {/* Hero */}
      <section id="menu" className="relative min-h-screen flex items-center pt-10">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
            alt="Coffee shop interior"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>

        <div className="relative z-[1] w-full max-w-[1100px] mx-auto px-10 max-md:px-6 flex flex-col gap-12">
          {/* Headline */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#e07b39]" />
              <span className="text-[#e07b39] text-[0.65rem] uppercase tracking-[0.22em]">Morristown, Tennessee</span>
            </div>
            <h1 className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.92] tracking-[-0.02em] text-white uppercase">
              Milk<br /><span className="text-[#e07b39]">&</span><br />Honey
            </h1>
            <p className="text-[#555] text-[0.95rem] tracking-[0.03em] mt-6 max-w-[380px] leading-[1.7]">
              Morristown's favorite pour. Crafted with intention. Served with heart.
            </p>
          </div>

          {/* Menu */}
          <div className="w-full border border-[#1e1e1e] rounded-sm overflow-hidden">
            <div className="bg-[#111] px-8 py-5 border-b border-[#1e1e1e] flex items-center gap-4">
              <div className="w-[3px] h-5 bg-[#e07b39]" />
              <h2 className="text-white text-[0.8rem] font-bold uppercase tracking-[0.18em]">Our Menu</h2>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 bg-[#0d0d0d]">
              {[['Drinks', menuItems.drinks], ['Food', menuItems.food]].map(([label, items], col) => (
                <div key={label} className={`px-8 py-6 ${col === 0 ? 'border-r border-[#1a1a1a] max-md:border-r-0 max-md:border-b max-md:border-[#1a1a1a]' : ''}`}>
                  <h3 className="text-[#e07b39] text-[0.65rem] uppercase tracking-[0.18em] mb-5">{label}</h3>
                  <ul className="list-none flex flex-col gap-3">
                    {items.map(item => (
                      <li key={item.name} className="flex justify-between items-start border-b border-[#161616] pb-3">
                        <div>
                          <span className="text-white text-[0.9rem] font-semibold">{item.name}</span>
                          <p className="text-[#4a4a4a] text-[0.75rem] mt-[2px]">{item.desc}</p>
                        </div>
                        <span className="text-[#e07b39] text-[0.88rem] font-bold shrink-0 ml-4">{item.price}</span>
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
      <section id="gallery" className="bg-[#0a0a0a] pb-16">
        <div className="flex items-center gap-5 px-8 pt-14 pb-8 max-w-[1200px] mx-auto">
          <div className="w-[3px] h-8 bg-[#e07b39] shrink-0" />
          <h2 className="text-white text-[clamp(1.3rem,3vw,1.8rem)] font-black uppercase tracking-[0.04em]">Gallery</h2>
          <div className="flex-1 h-px bg-[#1a1a1a]" />
        </div>
        <div className="columns-3 max-md:columns-2 max-[480px]:columns-1 gap-2 max-w-[1200px] mx-auto px-6">
          {photos.map((photo, i) => (
            <div
              key={photo.url}
              className="relative overflow-hidden mb-2 break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <img src={photo.url} alt={photo.alt} loading="lazy" className="w-full h-auto block transition-all duration-500 group-hover:brightness-[0.4]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-[0.78rem] uppercase tracking-[0.1em] border border-white px-4 py-2">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
        {lightbox !== null && (
          <div className="fixed inset-0 z-[200] bg-[rgba(0,0,0,0.97)] flex items-center justify-center cursor-pointer" onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-6 text-white text-[1.4rem] opacity-40 hover:opacity-100 transition-opacity" onClick={() => setLightbox(null)}>&#10005;</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-[3rem] px-4 py-2 opacity-35 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}>&#8249;</button>
            <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default" onClick={(e) => e.stopPropagation()}>
              <img src={photos[lightbox].url.replace('w=900','w=1400')} alt={photos[lightbox].alt} className="max-w-full max-h-[80vh] object-contain" />
              <p className="text-[#e07b39] text-[0.75rem] uppercase tracking-[0.12em] mt-3">{photos[lightbox].caption}</p>
            </div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-[3rem] px-4 py-2 opacity-35 hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}>&#8250;</button>
          </div>
        )}
      </section>

      {/* Quote strip */}
      <div
        className="relative h-[280px] bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.9)]" />
        <div className="relative z-[1] text-center px-8">
          <div className="flex items-center gap-4 justify-center mb-5">
            <div className="w-12 h-[2px] bg-[#e07b39]" />
            <div className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <div className="w-12 h-[2px] bg-[#e07b39]" />
          </div>
          <blockquote className="text-[clamp(0.9rem,2vw,1.45rem)] text-white font-semibold uppercase tracking-[0.05em] leading-[1.7]">
            "Good coffee is a pleasure.<br />Good company is a treasure."
          </blockquote>
          <p className="text-[#e07b39] text-[0.65rem] uppercase tracking-[0.18em] mt-5">Every cup poured with care — Morristown, TN</p>
        </div>
      </div>

      {/* Find Us */}
      <section id="find-us" className="bg-[#0d0d0d] pb-16">
        <div className="flex items-center gap-5 px-8 pt-14 pb-8 max-w-[1100px] mx-auto">
          <div className="w-[3px] h-8 bg-[#e07b39] shrink-0" />
          <h2 className="text-white text-[clamp(1.3rem,3vw,1.8rem)] font-black uppercase tracking-[0.04em]">Find Us</h2>
          <div className="flex-1 h-px bg-[#1a1a1a]" />
        </div>
        <div className="grid grid-cols-[280px_1fr] max-md:grid-cols-1 gap-10 max-w-[1100px] mx-auto px-8">
          <div className="flex flex-col gap-7">
            {[
              { label: 'Address', lines: ['247 W Main St', 'Morristown, TN 37814'] },
              { label: 'Hours', rows: [['Mon – Fri','6:30 am – 7:00 pm'],['Saturday','7:00 am – 8:00 pm'],['Sunday','8:00 am – 5:00 pm']] },
              { label: 'Contact', lines: ['(423) 555-0182','hello@roastedridge.com'] },
            ].map(block => (
              <div key={block.label}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-[1px] bg-[#e07b39]" />
                  <h3 className="text-[#e07b39] text-[0.62rem] uppercase tracking-[0.22em]">{block.label}</h3>
                </div>
                {block.lines?.map(l => <p key={l} className="text-[#999] text-[0.9rem] leading-[1.7]">{l}</p>)}
                {block.rows?.map(([d,t]) => (
                  <div key={d} className="flex justify-between text-[#999] text-[0.85rem] py-[0.3rem] border-b border-[#161616]">
                    <span>{d}</span><span>{t}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="h-[400px] max-md:h-[300px] overflow-hidden border border-[#1e1e1e]">
            <iframe title="Milk and Honey Location" src="https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#181818] text-center py-8 px-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-[1px] bg-[#e07b39]" />
            <span className="text-[#e07b39] text-[1.2rem]">&#9749;</span>
            <div className="w-8 h-[1px] bg-[#e07b39]" />
          </div>
          <SocialLinks color="#555" hoverColor="#e07b39" />
          <p className="text-[#333] text-[0.78rem] uppercase tracking-[0.05em]">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
          <p className="text-[#242424] text-[0.7rem] italic">Made with love (and a lot of espresso).</p>
        </div>
      </footer>
    </div>
  )
}
