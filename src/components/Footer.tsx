import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

import "../styles/footer.css";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-heading">For my Baby Spa</h3>
            <p className="footer-description">
              Creating magical moments and promoting wellness for your precious little ones.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61567491835555" className="social-icon" aria-label="Facebook - for my baby spa katerini"><FaFacebookF className="icon fb" /></a>
              <a href="https://www.instagram.com/formybabyspa_katerini/" className="social-icon" aria-label="Instagram - for my baby spa katerini"><FaInstagram className="icon insta" /></a>
              <a href="https://www.tiktok.com/@formybabyspa.kate" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok className=" icon tiktok"/></a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-list">
              {["Αρχική", "Υπηρεσίες", "Σχετικά με εμάς", "Επικοινωνία"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    aria-label="Επιλογή συνδέσμου"
                    className="footer-link"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-subheading">Services</h4>
            <ul className="footer-list">
              {["Ύδροθεραπεία", "Βρεφικό Μασάζ"].map(service => (
                <li className="service-link" key={service}>
                  <a href="#services" className="footer-link" aria-label="Υπηρεσίες, Υδροθεραπία, Βρεφικό Μασάζ">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-subheading">Contact</h4>
            <div className="footer-contact">
              <p><Phone className="phone" /> +30 693 102 2111</p>
              <p><Mail className="mail" /> formybabyspakaterini@gmail.com</p>
              <p><MapPin className="mapin" /> 25ης Μαρτίου 46, Κατερίνη 601 00<br /></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} For my  Baby Spa  - Κατερίνη by Αναστασία Βελώνη. </p>
          <p>
            All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
