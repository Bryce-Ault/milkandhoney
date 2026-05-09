import Navbar from './components/Navbar'
import HeroMenu from './components/HeroMenu'
import Gallery from './components/Gallery'
import ParallaxStrip from './components/ParallaxStrip'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroMenu />
      <Gallery />
      <ParallaxStrip />
      <FindUs />
      <Footer />
    </div>
  )
}
