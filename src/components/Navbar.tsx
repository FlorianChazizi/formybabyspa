import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import '../styles/navbar.css';
import logo from '../assets/formybabyspa.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { services } from '../data/ServicesData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // 👈 new state

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
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

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="/" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up">Αρχική</a>

          {/* Dropdown for large screens */}
          <div className="nav-item-with-dropdown" data-aos="fade-up" data-aos-duration="1200">
            <a href="/#services" className={`navlinks ${isScrolled ? 'scrolled' : ''}`}>
              Υπηρεσίες <FaAngleDown className="dropdown-icon" />
            </a>
            <div className="dropdown-menu" >
              {services.map((service) => (
                <a key={service.link} href={service.link}>
                  {service.navTitle || service.title}    </a>
              ))}
            </div>
          </div>

          <a href="#who-we-are" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up" data-aos-duration="1400">Σχετικά με εμάς</a>
          <a href="/gallery" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up" data-aos-duration="1600">Portfolio</a>
          <a href="#radevou" className={`navlinks ${isScrolled ? 'scrolled' : ''} contact`} data-aos="fade-up" data-aos-duration="1800">Κλείσε Ραντεβού</a>
        </div>

        {/* Social icons */}
        <div className="navbar-socials" data-aos="fade-right">
          <a href="https://www.facebook.com/profile.php?id=61567491835555" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/formybabyspa_katerini/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@formybabyspa.kate" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>

        {/* Hamburger */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setIsOpen(false)}>Αρχική</a>

          {/* Mobile dropdown trigger */}
          <button
            className="mobile-dropdown-toggle"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Υπηρεσίες <FaAngleDown className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} />
          </button>

          {/* Mobile dropdown content */}
          {isServicesOpen && (
            <div className="mobile-dropdown">
              {services.map((service) => (
                <a key={service.link} href={service.link}>
                  {service.navTitle || service.title}    </a>
              ))}
            </div>
          )}

          <a href="#who-we-are" onClick={() => setIsOpen(false)}>Σχετικά με εμάς</a>
          <a href="/gallery" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#radevou" className="contact" onClick={() => setIsOpen(false)}>Κλείσε Ραντεβού</a>

          <div className="mobile-menu-socials">
            <a href="https://www.facebook.com/profile.php?id=61567491835555" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/formybabyspa_katerini/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@formybabyspa.kate" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
