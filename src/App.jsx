import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroMenu from './components/HeroMenu'
import Gallery from './components/Gallery'
import ParallaxStrip from './components/ParallaxStrip'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import MinimalistPage from './themes/MinimalistPage'
import RusticPage from './themes/RusticPage'
import ModernPage from './themes/ModernPage'
import GoldenPage from './themes/GoldenPage'
import NextStepsPage from './themes/NextStepsPage'
import './App.css'

function OriginalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroMenu />
      <Gallery />
      <ParallaxStrip />
      <FindUs />
      <Footer />
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState('original')

  return (
    <>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      {theme === 'original'   && <OriginalPage />}
      {theme === 'minimalist' && <MinimalistPage />}
      {theme === 'rustic'     && <RusticPage />}
      {theme === 'modern'     && <ModernPage />}
      {theme === 'golden'     && <GoldenPage />}
      {theme === 'next-steps' && <NextStepsPage />}
    </>
  )
}
