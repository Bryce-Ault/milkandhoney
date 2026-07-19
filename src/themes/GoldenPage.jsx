import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import { photos } from '../data/photos'
import SocialLinks from '../components/SocialLinks'
import { MapPinIcon, ClockIcon, PhoneIcon } from '../components/InfoIcons'

function GoldenNav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <nav className="sticky top-10 left-0 right-0 z-[100] flex items-center justify-between px-10 py-[0.9rem] max-md:px-5 max-md:py-[0.8rem] bg-[rgba(9,7,0,0.88)] backdrop-blur-[8px]">
      <div className="flex items-center gap-2">
        <span className="text-[1.6rem] text-[#f5c518]">&#9749;</span>
        <span className="text-[1.1rem] max-md:text-[0.9rem] font-bold tracking-[0.03em] text-[#fff8d6]" style={{ fontFamily: 'Georgia, serif' }}>Milk and Honey</span>
      </div>
      <ul className="list-none flex gap-7 max-[480px]:gap-4">
        {[['menu','Menu'],['gallery','Gallery'],['find-us','Find Us']].map(([id,label]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="cursor-pointer text-[#c8a840] text-[0.95rem] tracking-[0.05em] uppercase py-1 border-b border-transparent transition-all duration-200 hover:text-[#f5c518] hover:border-[#f5c518]"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MenuItem({ item }) {
  return (
    <li className="flex flex-col gap-[0.2rem]">
      <div className="flex justify-between items-baseline">
        <span className="text-[#fff8d6] text-[1.05rem] font-bold" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</span>
        <span className="text-[#f5c518] text-base font-bold shrink-0">{item.price}</span>
      </div>
      <span className="text-[#8a7040] text-[0.85rem] italic">{item.desc}</span>
    </li>
  )
}

export default function GoldenPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="bg-[#090700]" style={{ fontFamily: 'Georgia, serif' }}>
      <GoldenNav />

      {/* Hero + Menu */}
      <section id="menu" className="relative min-h-screen flex flex-col items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
            alt="Coffee shop interior"
            className="w-full h-full object-cover object-center brightness-[0.38] saturate-[1.15]"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(9,7,0,0.22) 0%, rgba(9,7,0,0.52) 40%, rgba(9,7,0,0.76) 100%)' }}
          />
        </div>

        <div className="relative z-[1] w-full max-w-[1100px] px-8 pt-[7.5rem] pb-12 flex flex-col items-center gap-10">
          <div className="text-center">
            <h1
              className="text-[#fff8d6] text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] mb-2"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}
            >
              Milk and Honey
            </h1>
            <p className="text-[#f5c518] text-[1.15rem] tracking-[0.06em] italic">
              Morristown's Favorite Pour — Crafted with Heart
            </p>
          </div>

          {/* Menu Card */}
          <div
            className="w-full rounded-2xl px-12 py-10 max-[480px]:px-5 max-[480px]:py-6"
            style={{
              background: 'rgba(14,11,0,0.84)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(245,197,24,0.22)',
            }}
          >
            <h2 className="text-center text-[#f5c518] text-[1.8rem] tracking-[0.1em] uppercase mb-3">Our Menu</h2>
            <div className="w-[60px] h-[2px] bg-[#f5c518] mx-auto mb-8" />

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8">
              {[['Drinks', menuItems.drinks], ['Food', menuItems.food]].map(([label, items]) => (
                <div key={label}>
                  <h3 className="text-[#c8a840] text-base uppercase tracking-[0.15em] mb-5 pb-[0.4rem] border-b border-[rgba(245,197,24,0.22)]">
                    {label}
                  </h3>
                  <ul className="list-none flex flex-col gap-4">
                    {items.map(item => <MenuItem key={item.name} item={item} />)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#0c0a00] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] text-[#fff8d6] mb-2 tracking-[0.03em]">
            A Little Taste of the Life
          </h2>
          <p className="text-[#8a7040] text-[1.05rem] italic">Come in, sit down, and stay awhile.</p>
        </div>
        <div className="columns-3 max-md:columns-2 max-[480px]:columns-1 gap-4 max-w-[1200px] mx-auto px-6">
          {photos.map((photo, i) => (
            <div
              key={photo.url}
              className="relative overflow-hidden rounded-[10px] mb-4 break-inside-avoid cursor-pointer transition-all duration-300 hover:-translate-y-[3px] group"
              style={{ boxShadow: '0 2px 12px rgba(9,7,0,0.5)' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                style={{ background: 'linear-gradient(to top, rgba(9,7,0,0.78), transparent)' }}
              >
                <span className="text-[#f5c518] text-[0.9rem] italic px-4 py-3">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(6,5,0,0.96)' }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-6 text-[#fff8d6] text-[1.6rem] cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setLightbox(null)}
            >&#10005;</button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fff8d6] text-[3rem] cursor-pointer px-4 py-2 rounded leading-none transition-colors"
              style={{ background: 'rgba(245,197,24,0.1)' }}
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}
            >&#8249;</button>
            <div
              className="max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].url.replace('w=900', 'w=1400')}
                alt={photos[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-md"
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.8)' }}
              />
              <p className="text-[#f5c518] italic mt-3 text-base">{photos[lightbox].caption}</p>
            </div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fff8d6] text-[3rem] cursor-pointer px-4 py-2 rounded leading-none transition-colors"
              style={{ background: 'rgba(245,197,24,0.1)' }}
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}
            >&#8250;</button>
          </div>
        )}
      </section>

      {/* Parallax Strip */}
      <div
        className="relative h-[380px] bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[rgba(6,5,0,0.64)]" />
        <div className="relative z-[1] text-center text-[#fff8d6] px-8">
          <blockquote
            className="text-[clamp(1.2rem,3vw,2rem)] italic tracking-[0.02em] leading-[1.5] mb-3"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            "Good coffee is a pleasure. Good company is a treasure."
          </blockquote>
          <span className="text-[0.95rem] text-[#f5c518] tracking-[0.08em] uppercase">
            Every cup poured with care — Morristown, TN
          </span>
        </div>
      </div>

      {/* Find Us */}
      <section id="find-us" className="bg-[#090700] pb-16">
        <div className="text-center px-4 pt-14 pb-8">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] text-[#fff8d6] mb-2 tracking-[0.03em]">Find Us</h2>
          <p className="text-[#8a7040] text-[1.05rem] italic">We're right in the heart of Morristown.</p>
        </div>
        <div className="grid grid-cols-[340px_1fr] max-md:grid-cols-1 gap-10 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="flex items-center gap-2 text-[1rem] uppercase tracking-[0.1em] text-[#c8a840] mb-2"><MapPinIcon /> Address</h3>
              <p className="text-[#fff8d6] text-base leading-[1.7]">247 W Main St</p>
              <p className="text-[#fff8d6] text-base leading-[1.7]">Morristown, TN 37814</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[1rem] uppercase tracking-[0.1em] text-[#c8a840] mb-2"><ClockIcon /> Hours</h3>
              <ul className="list-none flex flex-col gap-[0.35rem]">
                {[['Mon – Fri','6:30 am – 7:00 pm'],['Saturday','7:00 am – 8:00 pm'],['Sunday','8:00 am – 5:00 pm']].map(([d,t]) => (
                  <li key={d} className="flex justify-between text-[#fff8d6] text-[0.95rem]">
                    <span>{d}</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[1rem] uppercase tracking-[0.1em] text-[#c8a840] mb-2"><PhoneIcon /> Contact</h3>
              <p className="text-[#fff8d6] text-base leading-[1.7]">(423) 555-0182</p>
              <p className="text-[#fff8d6] text-base leading-[1.7]">hello@roastedridge.com</p>
            </div>
          </div>
          <div
            className="h-[420px] max-md:h-[320px] rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(245,197,24,0.18)', boxShadow: '0 4px 24px rgba(9,7,0,0.6)' }}
          >
            <iframe
              title="Milk and Honey Location"
              src="https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050400] text-center py-8 px-4">
        <div className="flex flex-col items-center gap-[0.4rem]">
          <span className="text-[1.8rem] text-[#f5c518]">&#9749;</span>
          <SocialLinks color="#c8a840" hoverColor="#f5c518" />
          <p className="text-[0.9rem] text-[#c8a840]">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
          <p className="text-[0.82rem] italic text-[#4a3808]">Made with love (and a lot of espresso).</p>
        </div>
      </footer>
    </div>
  )
}
