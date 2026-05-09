import { useState } from 'react'

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85',
    alt: 'Latte art in a white cup',
    caption: 'Hand-crafted latte art',
  },
  {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85',
    alt: 'Espresso shot being pulled',
    caption: 'Single-origin espresso',
  },
  {
    url: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=900&q=85',
    alt: 'Freshly baked pastries on a tray',
    caption: 'Baked fresh every morning',
  },
  {
    url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=85',
    alt: 'Cold brew on ice',
    caption: '24-hour cold brew',
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85',
    alt: 'Coffee shop counter with barista',
    caption: 'Your neighborhood baristas',
  },
  {
    url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=85',
    alt: 'Cozy coffee shop window seat',
    caption: 'A window seat for two',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <h2>A Little Taste of the Life</h2>
        <p>Come in, sit down, and stay awhile.</p>
      </div>

      <div className="masonry-grid">
        {photos.map((photo, i) => (
          <div
            key={photo.url}
            className="masonry-item"
            onClick={() => setLightbox(i)}
          >
            <img src={photo.url} alt={photo.alt} loading="lazy" />
            <div className="masonry-overlay">
              <span className="masonry-caption">{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&#10005;</button>
          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}
          >&#8249;</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightbox].url.replace('w=900', 'w=1400')} alt={photos[lightbox].alt} />
            <p className="lightbox-caption">{photos[lightbox].caption}</p>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}
          >&#8250;</button>
        </div>
      )}
    </section>
  )
}
