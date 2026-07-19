const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(212,169,106,0.18)',
  borderRadius: '14px',
  padding: '28px',
}

export default function NextStepsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0c0704',
      color: '#e9ddc9',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px 80px' }}>

        <p style={{
          color: '#d4a96a', fontSize: '0.72rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', marginBottom: '10px', fontWeight: 600,
        }}>
          Next Steps
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '14px', lineHeight: 1.2 }}>
          Here's how this works
        </h1>
        <p style={{ color: '#b89a78', fontSize: '1rem', lineHeight: 1.6, marginBottom: '40px' }}>
          Pick whichever design above feels right for the shop — that's the starting point.
          Everything below explains what you'll be able to manage yourself once the site is live,
          and what it costs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>

          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: '#f0e4cf' }}>
              You can update the site yourself — no code needed
            </h2>
            <p style={{ color: '#b89a78', lineHeight: 1.65, marginBottom: '10px' }}>
              You'll get your own private login to a website called{' '}
              <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a96a', textDecoration: 'underline' }}>Sanity</a>
              {' '}— think of it like your control panel, separate from the main site, made just
              for making these edits. Once you're logged in, that's where you go to change:
            </p>
            <ul style={{ color: '#b89a78', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li>Hours of operation</li>
              <li>Menu items, descriptions, and prices</li>
              <li>Contact info — phone number, email, and address</li>
              <li>Your map location — where customers get directed on Google Maps</li>
              <li>Photos — the gallery and any menu item pictures</li>
            </ul>
            <p style={{ color: '#8a7255', lineHeight: 1.65, marginTop: '10px', fontSize: '0.92rem' }}>
              You log in, fill out a simple form, and hit publish. Changes show up on the live site right away.
            </p>
            <p style={{ color: '#8a7255', lineHeight: 1.65, marginTop: '10px', fontSize: '0.92rem' }}>
              Cost: Sanity is free to use for a single small-business site like this one. You
              wouldn't start paying unless the business grew a lot — many more staff logging in,
              or way more traffic than a coffee shop typically gets.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: '#f0e4cf' }}>
              Cost
            </h2>
            <p style={{ color: '#d4a96a', fontSize: '1.6rem', fontWeight: 700, marginBottom: '10px' }}>
              $250 flat
            </p>
            <p style={{ color: '#b89a78', lineHeight: 1.65, marginBottom: '10px' }}>
              Covers the full site build, the design, and setting up your self-service dashboard
              for hours, menu, photos, contact info, and map location.
            </p>
            <p style={{ color: '#8a7255', lineHeight: 1.65, fontSize: '0.92rem' }}>
              Not included: your domain name — that's the web address people type to find you,
              like milkandhoney.com (typically $10–20/year through a registrar; you own it, not me).
            </p>
            <p style={{ color: '#8a7255', lineHeight: 1.65, fontSize: '0.92rem', marginTop: '8px' }}>
              Also not a cost: hosting — the service that keeps your site actually up and running
              on the internet, 24/7. That's handled through Cloudflare's free tier, which comfortably
              covers a site like this — you shouldn't ever see a bill for it.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: '#f0e4cf' }}>
              Free support for 12 months
            </h2>
            <p style={{ color: '#b89a78', lineHeight: 1.65, marginBottom: '10px' }}>
              For a year after launch, small tweaks to what's already there are free — think
              adjusting colors, swapping the favicon, changing the font, tweaking the layout,
              fixing something that looks off, or updating wording elsewhere on the page, like
              the headline or tagline.
            </p>
            <p style={{ color: '#8a7255', lineHeight: 1.65, fontSize: '0.92rem' }}>
              Remember, your hours, menu, contact info, and photos are already yours to update
              anytime through your own dashboard — you don't need me for those.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: '#f0e4cf' }}>
              It's genuinely yours
            </h2>
            <p style={{ color: '#b89a78', lineHeight: 1.65 }}>
              You get the actual code behind your site, not just access to a locked-in tool.
              That means you're never stuck with me — you're free to bring in any developer
              down the road, or take it in a completely different direction whenever you want.
            </p>
            <p style={{ color: '#8a7255', lineHeight: 1.65, marginTop: '10px', fontSize: '0.92rem' }}>
              If you ever want to try making a small change yourself, AI coding tools like
              Claude Code can walk you through it in plain English — no programming background
              needed. Totally optional, just nice to know it's an option.
            </p>
          </div>

        </div>

        <p style={{ color: '#8a7255', fontSize: '0.85rem', lineHeight: 1.6 }}>
          Once you've picked a design, just let me know and we'll get started.
        </p>
      </div>
    </div>
  )
}
