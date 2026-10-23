import HardwareLandingPage from './pages/hardware/HardwareLandingPage'
import SoftwareLandingPage from './pages/software/SoftwareLandingPage'

function App() {
  return window.location.pathname.replace(/\/$/, '').endsWith('/software')
    ? <SoftwareLandingPage />
    : <HardwareLandingPage />
}

export default App
