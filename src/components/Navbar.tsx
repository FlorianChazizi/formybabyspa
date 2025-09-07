import { useState, useEffect } from 'react';
import '../styles/navbar.css'; // Pure CSS only
import logo from '../assets/formybabyspa.png'; // adjust path as needed
import Aos from "aos";
import "aos/dist/aos.css";

// Import social icons
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // 1000ms animation, play once
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation-bar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="navbar-container">



        {/* Logo */}
        <div className="navbar-logo" data-aos="flip-left">
          <a href="/">
            <img
              src={logo}
              className="logo-img"
              height={120}
              width={120}
              alt="Logo"
              aria-label='Λογότυπο, For my baby spa katerini'
            />
          </a>
        </div>



        {/* Horizontal links */}
        <div className="navbar-links">
          <a href="/" className="navlinks" aria-label='αρχική σελίδα' data-aos="fade-up">Αρχική</a>
          <a href="/#services" className="navlinks" aria-label='σελίδα υπηρεσιών' data-aos="fade-up" data-aos-duration="1200">Υπηρεσίες</a>
          <a href="#who-we-are" className="navlinks" aria-label='σελίδα επικοινωνίας' data-aos="fade-up" data-aos-duration="1400">Σχετικά με εμάς</a>
          <a href="/gallery" className="navlinks" aria-label='σελίδα φωτογραφιών' data-aos="fade-up" data-aos-duration="1600">Gallery</a>
          <a href="#radevou" className="navlinks contact" aria-label='σελίδα ραντεβού' data-aos="fade-up" data-aos-duration="1800">Κλείσε Ραντεβού</a>
        </div>

        {/* Social icons - left side */}
        <div className="navbar-socials" data-aos="fade-right">
          <a href="https://www.facebook.com/profile.php?id=61567491835555" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/formybabyspa_katerini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@formybabyspa.kate" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
        </div>

        {/* Mobile: socials between logo & hamburger */}
        {/* <div className="mobile-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div> */}

        {/* Hamburger */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          {/* Socials inside menu */}


          <a href="/" onClick={() => setIsOpen(false)} aria-label='αρχική σελίδα' data-aos="fade-up">Αρχική</a>
          <a href="#services" onClick={() => setIsOpen(false)} aria-label='σελίδα υπηρεσιών' data-aos="fade-up" data-aos-duration="1200">Υπηρεσίες</a>
          <a href="#who-we-are" onClick={() => setIsOpen(false)} aria-label='σελίδα επικοινωνίας' data-aos="fade-up" data-aos-duration="1400">Σχετικά με εμάς</a>
          <a href="/gallery" onClick={() => setIsOpen(false)} aria-label='σελίδα φωτογραφιών' data-aos="fade-up" data-aos-duration="1600">Gallery</a>
          <a href="#radevou" className='navlinks contact' onClick={() => setIsOpen(false)} aria-label='σελίδα ραντεβού' data-aos="fade-up" data-aos-duration="1800">Κλείσε Ραντεβού</a>
          <div className="mobile-menu-socials" data-aos="fade-down" data-aos-duration="2000">
            <a href="https://www.facebook.com/profile.php?id=61567491835555" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/formybabyspa_katerini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@formybabyspa.kate" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
