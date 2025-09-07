import '../styles/service-section.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Baby, Hand, Phone,  Cake } from 'lucide-react';
import hydro from '../assets/hydro.jpeg';
import massage from '../assets/massage.jpeg';
import serviceparty from '../assets/party.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";

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

export default function ServicesSection() {
    useEffect(() => {
      Aos.init({ duration: 1000, once: true }); // 1000ms animation, play once
    }, []);
  
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Υπηρεσίες</h2>

        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`service-card ${service.bgClass}`} data-aos="fade-right">
                <img src={service.image} alt={service.title} className="service-image"  loading='lazy'/>
                <div className="service-content">
                  <div className="service-title">
                    <Icon className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    {/* <span className="price">{service.price}</span> */}
                    <a className="book-btn" href='#radevou'>Κάνε κράτηση</a>

                    <Link to={service.link} className="learn-more-btn">Μάθε περισσότερα </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
