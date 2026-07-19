export default function SocialLinks({ color = '#b89a78', hoverColor = '#d4a96a', size = 18 }) {
  const handleEnter = (e) => { e.currentTarget.style.color = hoverColor }
  const handleLeave = (e) => { e.currentTarget.style.color = color }

  return (
    <div className="flex items-center gap-4">
      <a
        href="https://instagram.com/roastedridgecoffee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color, transition: 'color 0.18s' }}
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
        href="https://facebook.com/roastedridgecoffee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        style={{ color, transition: 'color 0.18s' }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.3c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03v2.25H7.7v3h2.6V21h3.2z" />
        </svg>
      </a>
    </div>
  )
}
