
import './App.css';
import Navbar from './components/Navbar.tsx';
import HeroCarousel from './components/Hero-carousel.tsx';
import ServicesSection from './components/Service-section.tsx';
import ContactSection from './components/contact-section.tsx';
import Footer from './components/Footer.tsx';
import ReviewsCarousel from './components/ReviewsCarousel.js';
import ContactForm from './components/Contact-form.tsx';
import BubblesBackground from "./components/BubblesBackground";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <HeroCarousel />
        <ServicesSection />
        <ContactSection />
        <ReviewsCarousel />
        <BubblesBackground />
        <ContactForm />
        <Footer />
    </div>
    </>
  )
}

export default App
