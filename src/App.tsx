
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HeroCarousel from './components/Hero-carousel.tsx';
import ServicesSection from './components/Service-section.tsx';
import ContactSection from './components/contact-section.tsx';
import Footer from './components/Footer.tsx';
import ReviewsCarousel from './components/ReviewsCarousel.js';
import ContactForm from './components/Contact-form.tsx';
import BubblesBackground from "./components/BubblesBackground";
import HydrotherapyPage from './components/Hydrotherapy.tsx';
import MassagePage from './components/Massage.tsx';
import PartyPage from './components/Party.tsx';
import SpaPage from './components/SpaPage.tsx';
import NotFound from './pages/NotFound.tsx';
function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeroCarousel />
              <ServicesSection />
              <ContactSection />
              <ReviewsCarousel />
              <BubblesBackground />
              <ContactForm />
            </>
          }
      />
      <Route
        path="/hydrotherapy"
        element={<HydrotherapyPage />} 
       />
      <Route
        path="/massage"
        element={<MassagePage />} 
       />      
      <Route 
        path="/party"
        element={<PartyPage />} 
      />
      <Route 
        path="/gallery"
        element={<SpaPage />}
        />
      <Route
        path="*"
        element={<NotFound />}
      />
      </Routes>
      <Footer />

    </>
  )
}

export default App
