import SocialLinks from './SocialLinks'
import HoneyDropMark from './HoneyDropMark'

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-muted text-center py-8 px-4">
      <div className="flex flex-col items-center gap-[0.4rem]">
        <HoneyDropMark size={26} color="#d4a96a" outline="#4a3208" />
        <SocialLinks color="#b89a78" hoverColor="#d4a96a" />
        <p className="text-[0.9rem]">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
        <p className="text-[0.82rem] italic text-medium">Made with love (and a lot of espresso).</p>
      </div>
    </footer>
  )
}
