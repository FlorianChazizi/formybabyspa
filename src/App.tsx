
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
import CollaborationInvite from './components/CollaborationInvite.tsx';
import WhoWeAre from './components/WhoWeAre.tsx';
import TinyFeetBigStepsPage from './components/TinyFeetBigSteps.tsx';
import { Analytics } from "@vercel/analytics/react";
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
              <WhoWeAre />
              <ServicesSection />
              <ContactSection />
              <ReviewsCarousel />
              <BubblesBackground />
              <ContactForm />
              <CollaborationInvite />
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
        <Route
          path="/tiny-feet-big-steps"
          element={<TinyFeetBigStepsPage />}
        />
      </Routes>

      <Analytics />
      <Footer />

    </>
  )
}

export default App
