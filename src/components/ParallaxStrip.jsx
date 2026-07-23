export default function ParallaxStrip() {
  return (
    <div
      className="relative h-[380px] bg-fixed max-md:bg-scroll bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-[rgba(58,38,8,0.58)]" />
      <div className="relative z-[1] text-center text-cream px-8">
        <blockquote className="text-[clamp(1.2rem,3vw,2rem)] italic tracking-[0.02em] leading-[1.5] mb-3 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
          "Good coffee is a pleasure. Good company is a treasure."
        </blockquote>
        <span className="text-[0.95rem] text-gold tracking-[0.08em] uppercase">
          Every cup poured with care — Morristown, TN
        </span>
      </div>
    </div>
  )
}
