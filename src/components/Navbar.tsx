import { useState, useEffect } from 'react';
import '../styles/navbar.css'; // Pure CSS only
import logo from '../assets/formybabyspa.png'; // adjust path as needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation-bar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={logo}
            className=" logo-img"
            height={120}
            width={120}
            alt="Logo" />
        </div>

        <div className="navbar-links">
          <a href="/" className="navlinks">Αρχική</a>
          <a href="/#services" className="navlinks">Υπηρεσίες</a>
          <a href="#contact" className="navlinks">Επικοινωνία</a>
          <a href="#radevou" className="navlinks contact">Κλείσε Ραντεβού</a>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setIsOpen(false)}>Αρχική</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Υπηρεσίες</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Επικοινωνία</a>
          <a href="#radevou" className='navlinks contact' onClick={() => setIsOpen(false)}>Κλείσε Ραντεβού</a>
        </div>
      )}
    </nav>
  );
}
