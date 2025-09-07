import '../styles/service-section.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Baby, Hand, Phone, Cake } from 'lucide-react';
import hydro from '../assets/hydro.jpeg';
import massage from '../assets/massage.jpeg';
import serviceparty from '../assets/party.jpeg';
import Balonia from '../assets/balonia.jpeg';
import Stolismos from '../assets/stolismos.jpeg';
import FamilyTub from '../assets/familytub.jpeg';

import Aos from "aos";
import "aos/dist/aos.css";

// --- Main service cards ---
const services = [
  {
    icon: Baby,
    title: "Υδροθεραπεία | 40 ημερών - 3 ετών",
    description: "Το ζεστό νερό και οι απαλές κινήσεις , δημιουργούν αίσθημα ασφάλειας, βοηθώντας στην ανάπτυξη της αυτοπεποίθησης του μωρού",
    price: "35 €",
    image: hydro,
    bgClass: "blue-bg",
    link: "/hydrotherapy",
  },
  {
    icon: Hand,
    title: "Βρεφικό Μασάζ | Η τρυφερή τέχνη της φροντίδας",
    description: "Η σωματική επαφή είναι το πιο δυνατό, θεραπευτικό και καθησυχαστικό συναίσθημα για το μωρό σας. Το βρεφικό μασάζ δεν είναι απλώς μια στιγμή τρυφερότητας.",
    price: "35 €",
    image: massage,
    bgClass: "pink-bg",
    link: "/massage",
  },
  {
    icon: Cake,
    title: "Παιδικό Πάρτυ | Γενέθλια",
    description: "Γιορτάστε τα γενέθλια του παιδιού σας σε έναν μαγικό χώρο γεμάτο φροντίδα, χαρά και αισθητηριακές εμπειρίες που θα μείνουν αξέχαστες!",
    price: <Phone />,
    image: serviceparty,
    bgClass: "violet-bg",
    link: "/party",
  }
];

// --- Extra service categories ---
const extraServices = [
  {
    title: "Extra Υπηρεσίες",
    items: ["Ολοκληρωμένο Πακέτο Στολισμού με Μπαλόνια", "Ξεμύρωμα"],
    image: Balonia,
  },
  {
    title: "Μηνιαία Πακέτα (4 συνεδρίες)",
    items: ["Υδροθεραπεία", "Υδροθεραπεία & Βρεφική Μάλαξη"],
    image: massage,
  },
  {
    title: "Family Tub",
    items: [
      "1 Βρέφος / Παιδί: Υδροθεραπεία ή Υδροθεραπεία & Βρεφική Μάλαξη",
      "1 Βρέφος / Παιδί με 1 ή 2 συνοδούς",
      "2 Βρέφη / Παιδιά (με ή χωρίς συνοδούς)",
      "3 Βρέφη / Παιδιά (με ή χωρίς συνοδούς)"
    ],
    image: FamilyTub,
  },
  {
    title: "Πρόσθετες Υπηρεσίες",
    items: ["Θεματικός Στολισμός", "Υπηρεσία Little Princesses", "Βρεφική Μάλαξη (ανά παιδί)"],
    image: Stolismos,
  },
  {
    title: "Tiny Feet Big Steps",
    items: ["Διάρκεια: 6 εβδομάδες (1,5 ώρα / εβδομάδα)"],
    image: massage,
  },
  {
    title: "Birthday Party",
    items: ["Πακέτο 1 “Μαγεία & χρώμα”", "Πακέτο 2 “Μαγικά γενέθλια”", "Πακέτο 3 “Mini Party”", "Πακέτο 4 “Boys Bubble Party”"],
    image: serviceparty,
  }
];

export default function ServicesSection() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <h2>Υπηρεσίες</h2>
        </div>

        {/* Main Service Cards */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`service-card ${service.bgClass}`} data-aos="fade-right">
                <img src={service.image} alt={service.title} className="service-image" loading='lazy' />
                <div className="service-content">
                  <div className="service-title">
                    <Icon className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <a className="book-btn" href='#radevou'>Κάνε κράτηση</a>
                    <Link to={service.link} className="learn-more-btn">Μάθε περισσότερα </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Extra Services */}
        <div className="extra-services">
          {extraServices.map((section, index) => (
            <div key={index} className="extra-service-block" data-aos="fade-up">
              <img src={section.image} alt={section.title} className="extra-service-image" loading='lazy' />
              <div className="extra-service-content">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
