import { useState } from 'react'

const photos = [
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85', alt: 'Latte art in a white cup', caption: 'Hand-crafted latte art' },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85', alt: 'Espresso shot being pulled', caption: 'Single-origin espresso' },
  { url: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=900&q=85', alt: 'Freshly baked pastries on a tray', caption: 'Baked fresh every morning' },
  { url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=85', alt: 'Cold brew on ice', caption: '24-hour cold brew' },
  { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85', alt: 'Coffee shop counter with barista', caption: 'Your neighborhood baristas' },
  { url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=85', alt: 'Cozy coffee shop window seat', caption: 'A window seat for two' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="bg-cream pb-16">
      <div className="text-center px-4 pt-14 pb-8">
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] text-coffee-brown mb-2 tracking-[0.03em]">
          A Little Taste of the Life
        </h2>
        <p className="text-medium text-[1.05rem] italic">Come in, sit down, and stay awhile.</p>
      </div>

      <div className="columns-3 max-md:columns-2 max-[480px]:columns-1 gap-4 max-w-[1200px] mx-auto px-6">
        {photos.map((photo, i) => (
          <div
            key={photo.url}
            className="relative overflow-hidden rounded-[10px] mb-4 break-inside-avoid cursor-pointer shadow-[0_2px_12px_rgba(44,26,14,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(44,26,14,0.25)] hover:-translate-y-[3px] group"
            onClick={() => setLightbox(i)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(74,50,8,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-cream text-[0.9rem] italic px-4 py-3">{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-[rgba(58,38,8,0.92)] flex items-center justify-center cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-cream text-[1.6rem] cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setLightbox(null)}
          >
            &#10005;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.1)] text-cream text-[3rem] cursor-pointer px-4 py-2 rounded leading-none transition-colors hover:bg-[rgba(255,255,255,0.2)]"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}
          >
            &#8249;
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].url.replace('w=900', 'w=1400')}
              alt={photos[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-md shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            />
            <p className="text-gold italic mt-3 text-base">{photos[lightbox].caption}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.1)] text-cream text-[3rem] cursor-pointer px-4 py-2 rounded leading-none transition-colors hover:bg-[rgba(255,255,255,0.2)]"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
