export default function FindUs() {
  // 247 W Main St, Morristown, TN 37814
  // Coordinates: 36.2140, -83.3005 (downtown Morristown area)
  const mapSrc =
    'https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed'

  return (
    <section id="find-us" className="find-us-section">
      <div className="section-header light">
        <h2>Find Us</h2>
        <p>We're right in the heart of Morristown.</p>
      </div>

      <div className="find-us-content">
        <div className="location-info">
          <div className="info-block">
            <h3>&#128205; Address</h3>
            <p>247 W Main St</p>
            <p>Morristown, TN 37814</p>
          </div>

          <div className="info-block">
            <h3>&#128336; Hours</h3>
            <ul className="hours-list">
              <li><span>Mon – Fri</span><span>6:30 am – 7:00 pm</span></li>
              <li><span>Saturday</span><span>7:00 am – 8:00 pm</span></li>
              <li><span>Sunday</span><span>8:00 am – 5:00 pm</span></li>
            </ul>
          </div>

          <div className="info-block">
            <h3>&#128222; Contact</h3>
            <p>(423) 555-0182</p>
            <p>hello@roastedridge.com</p>
          </div>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Roasted Ridge Coffee Co. Location"
            src={mapSrc}
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
  )
}
