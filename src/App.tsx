
import './App.css'
import Navbar from './components/Navbar.tsx'
import HeroCarousel from './components/Hero-carousel.tsx'
import ServicesSection from './components/Service-section.tsx'
import ContactSection from './components/contact-section.tsx'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <HeroCarousel />
        <ServicesSection />
        <ContactSection />

    </div>
    </>
  )
}

export default App
