const themes = [
  { id: 'original',   label: 'Honey Amber' },
  { id: 'minimalist', label: 'Clean Minimal' },
  { id: 'rustic',     label: 'Rustic Warmth' },
  { id: 'modern',     label: 'Urban Edge' },
  { id: 'golden',     label: 'Golden Hour' },
]

const infoTabs = [
  { id: 'next-steps', label: 'Next Steps' },
]

export default function ThemeSwitcher({ theme, setTheme }) {
  const handleChange = (id) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setTheme(id)
  }

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 600,
      height: '40px', background: '#0c0704',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.07)',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <span style={{ color: '#7a6040', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginRight: '6px' }}>
        Design:
      </span>
      {themes.map(t => (
        <label
          key={t.id}
          style={{
            cursor: 'pointer',
            padding: '3px 13px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
            transition: 'all 0.18s',
            background: theme === t.id ? '#d4a96a' : 'transparent',
            color: theme === t.id ? '#0c0704' : '#b89a78',
            fontWeight: theme === t.id ? 700 : 400,
            border: theme === t.id ? '1px solid #d4a96a' : '1px solid rgba(184,154,120,0.28)',
          }}
        >
          <input
            type="radio"
            name="theme"
            value={t.id}
            checked={theme === t.id}
            onChange={() => handleChange(t.id)}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
          />
          {t.label}
        </label>
      ))}

      <span style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.12)', margin: '0 4px' }} />

      {infoTabs.map(t => (
        <label
          key={t.id}
          className="next-steps-tab"
          style={{
            cursor: 'pointer',
            padding: '4px 16px',
            borderRadius: '999px',
            fontSize: '0.74rem',
            letterSpacing: '0.04em',
            transition: 'all 0.18s',
            background: theme === t.id ? '#f0e4cf' : 'linear-gradient(135deg, #e9c589, #d4a96a)',
            color: '#0c0704',
            fontWeight: 700,
            border: theme === t.id ? '1px solid #f0e4cf' : '1px solid #d4a96a',
          }}
        >
          <input
            type="radio"
            name="theme"
            value={t.id}
            checked={theme === t.id}
            onChange={() => handleChange(t.id)}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
          />
          {t.label} →
        </label>
      ))}
    </div>
  )
}
