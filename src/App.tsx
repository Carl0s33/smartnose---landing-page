import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemaSection from './components/ProblemaSection'
import OQueESection from './components/OQueESection'
import VantagensSection from './components/VantagensSection'
import EventosSection from './components/EventosSection'
import EquipeSection from './components/EquipeSection'

function App() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-hidden">
      <Header />
      <HeroSection />
      <OQueESection />
      <ProblemaSection />
      <VantagensSection />
      <EventosSection />
      <EquipeSection />
    </main>
  )
}

export default App


