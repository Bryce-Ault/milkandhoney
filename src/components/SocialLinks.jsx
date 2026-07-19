export default function SocialLinks({ color = '#b89a78', hoverColor = '#d4a96a', badgeBg, size = 22, labelColor }) {
  const bg = badgeBg || 'rgba(255,255,255,0.06)'

  const handleEnter = (e) => {
    e.currentTarget.style.color = hoverColor
    e.currentTarget.style.background = hoverColor + '22'
  }
  const handleLeave = (e) => {
    e.currentTarget.style.color = color
    e.currentTarget.style.background = bg
  }

  const linkStyle = {
    color,
    background: bg,
    transition: 'color 0.18s, background 0.18s',
    width: size + 16,
    height: size + 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <span style={{
        color: labelColor || color, fontSize: '0.65rem', letterSpacing: '0.18em',
        textTransform: 'uppercase', fontWeight: 600,
      }}>
        Follow Us
      </span>
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={linkStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={linkStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.3c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03v2.25H7.7v3h2.6V21h3.2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
