export default function FindUs() {
  const mapSrc = 'https://maps.google.com/maps?q=247+W+Main+St,+Morristown,+TN+37814&output=embed'

  return (
    <section id="find-us" className="bg-section pb-16">
      <div className="text-center px-4 pt-14 pb-8">
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] text-coffee-brown mb-2 tracking-[0.03em]">Find Us</h2>
        <p className="text-medium text-[1.05rem] italic">We're right in the heart of Morristown.</p>
      </div>

      <div className="grid grid-cols-[340px_1fr] max-md:grid-cols-1 gap-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[1rem] uppercase tracking-[0.1em] text-medium mb-2">&#128205; Address</h3>
            <p className="text-coffee-brown text-base leading-[1.7]">247 W Main St</p>
            <p className="text-coffee-brown text-base leading-[1.7]">Morristown, TN 37814</p>
          </div>

          <div>
            <h3 className="text-[1rem] uppercase tracking-[0.1em] text-medium mb-2">&#128336; Hours</h3>
            <ul className="list-none flex flex-col gap-[0.35rem]">
              <li className="flex justify-between text-coffee-brown text-[0.95rem]">
                <span>Mon – Fri</span><span>6:30 am – 7:00 pm</span>
              </li>
              <li className="flex justify-between text-coffee-brown text-[0.95rem]">
                <span>Saturday</span><span>7:00 am – 8:00 pm</span>
              </li>
              <li className="flex justify-between text-coffee-brown text-[0.95rem]">
                <span>Sunday</span><span>8:00 am – 5:00 pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[1rem] uppercase tracking-[0.1em] text-medium mb-2">&#128222; Contact</h3>
            <p className="text-coffee-brown text-base leading-[1.7]">(423) 555-0182</p>
            <p className="text-coffee-brown text-base leading-[1.7]">hello@roastedridge.com</p>
          </div>
        </div>

        <div className="h-[420px] max-md:h-[320px] rounded-xl overflow-hidden border border-card-border shadow-[0_4px_24px_rgba(44,26,14,0.15)]">
          <iframe
            title="Milk and Honey Location"
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
