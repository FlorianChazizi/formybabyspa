import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import '../styles/navbar.css';
import logo from '../assets/formybabyspa.png';
import Aos from "aos";
import "aos/dist/aos.css";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

        {/* Horizontal links */}
        <div className="navbar-links">
          <a href="/" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up">Αρχική</a>

          {/* Dropdown for large screens */}
          <div className="nav-item-with-dropdown" data-aos="fade-up" data-aos-duration="1200">
            <a href="/#services" className={`navlinks ${isScrolled ? 'scrolled' : ''}`}>Υπηρεσίες <FaAngleDown className="dropdown-icon" /></a>
            <div className="dropdown-menu">
              <a href="/hydrotherapy">Υδροθεραπεία</a>
              <a href="/massage">Βρεφικό Μασάζ</a>
              <a href="/party">Spa Party</a>
              <a href="/tiny-feet-big-steps">Tiny Feet Big Steps</a>
              <a href="/family-tub">Family Tub</a>
              <a href="/fit-for-birth">Fit For Birth</a>
              <a href="/fit-after-birth">Fit After Birth</a>
              <a href="/yoga-mama-mwro">Yoga Μαμά Μωρό</a>
              <a href="/proetimasia-gia-thn-genna">Προετοιμασία για την Γέννα</a>
              <a href="/mathimata-thilasmou">Μαθήματα Θηλασμού</a>
              <a href="/mathimata-vrefikis-malaxis">Μαθήματα Βρεφικής Μάλαξης</a>
              <a href="/ksemiroma">Ξεμύρωμα</a>
            </div>
          </div>

          <a href="#who-we-are" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up" data-aos-duration="1400">Σχετικά με εμάς</a>
          <a href="/gallery" className={`navlinks ${isScrolled ? 'scrolled' : ''}`} data-aos="fade-up" data-aos-duration="1600">Gallery</a>
          <a href="#radevou" className={`navlinks ${isScrolled ? 'scrolled' : ''} contact`} data-aos="fade-up" data-aos-duration="1800">Κλείσε Ραντεβού</a>
        </div>

        {/* Social icons */}
        <div className="navbar-socials"  data-aos="fade-right">
          <a className={`navbar-socials ${isScrolled ? 'scrolled' : ''}`} href="https://www.facebook.com/profile.php?id=61567491835555" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a className={`navbar-socials ${isScrolled ? 'scrolled' : ''}`} href="https://www.instagram.com/formybabyspa_katerini/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className={`navbar-socials ${isScrolled ? 'scrolled' : ''}`} href="https://www.tiktok.com/@formybabyspa.kate" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
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
          <a href="#services" onClick={() => setIsOpen(false)}>Υπηρεσίες</a>
          <a href="#who-we-are" onClick={() => setIsOpen(false)}>Σχετικά με εμάς</a>
          <a href="/gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#radevou" className='contact' onClick={() => setIsOpen(false)}>Κλείσε Ραντεβού</a>
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
