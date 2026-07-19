import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-muted text-center py-8 px-4">
      <div className="flex flex-col items-center gap-[0.4rem]">
        <span className="text-[1.8rem] text-gold">&#9749;</span>
        <SocialLinks color="#b89a78" hoverColor="#d4a96a" />
        <p className="text-[0.9rem]">© 2026 Milk and Honey &nbsp;|&nbsp; 247 W Main St, Morristown, TN 37814</p>
        <p className="text-[0.82rem] italic text-medium">Made with love (and a lot of espresso).</p>
      </div>
    </footer>
  )
}
