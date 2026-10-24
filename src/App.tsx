import { useEffect, useState } from 'react'
import HardwareLandingPage from './pages/hardware/HardwareLandingPage'
import SoftwareLandingPage from './pages/software/SoftwareLandingPage'

type AppRoute = '/hardware' | '/software'

function readRoute(): AppRoute {
  return window.location.hash === '#/software' ? '/software' : '/hardware'
}

function App() {
  const [route, setRoute] = useState<AppRoute>(readRoute)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/software' || window.location.hash === '#/hardware') {
        setRoute(readRoute())
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return route === '/software' ? <SoftwareLandingPage /> : <HardwareLandingPage />
}

export default App
