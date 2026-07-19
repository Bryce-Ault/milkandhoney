export default function HoneyDropMark({ size = 26, color = '#d4a96a', outline = '#8a5a1f' }) {
  return (
    <svg width={size} height={size * 0.9375} viewBox="0 0 64 60" fill="none">
      <path
        d="M32 4 C46 24 54 36 54 46 C54 56.5 44 60 32 60 C20 60 10 56.5 10 46 C10 36 18 24 32 4 Z"
        fill={color}
        stroke={outline}
        strokeWidth="3"
      />
      <ellipse cx="24" cy="40" rx="4" ry="5.5" fill="#f5e6c8" opacity="0.75" />
    </svg>
  )
}
