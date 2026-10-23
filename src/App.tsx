import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemaSection from './components/ProblemaSection'
import OQueESection from './components/OQueESection'
import VantagensSection from './components/VantagensSection'
import EventosSection from './components/EventosSection'
import EquipeSection from './components/EquipeSection'
import SoftwareLandingPage from './pages/software/SoftwareLandingPage'

function App() {
  if (window.location.pathname.replace(/\/$/, '').endsWith('/software')) {
    return <SoftwareLandingPage />
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-brand-dark">
      <Header />
      <div className="hero-scroll-stage relative">
        <HeroSection />
        <OQueESection />
      </div>
      <ProblemaSection />
      <VantagensSection />
      <EventosSection />
      <EquipeSection />
    </main>
  )
}

export default App



