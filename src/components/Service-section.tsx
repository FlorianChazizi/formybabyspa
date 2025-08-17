import '../styles/service-section.css';
import { Link } from "react-router-dom";
import { Baby, Hand } from 'lucide-react';
import hydro from '../assets/hydro.jpeg';
import massage from '../assets/massage.jpeg';


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
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Υπηρεσίες</h2>
          <p>
            Carefully designed treatments that promote relaxation, development, and well-being
            for babies aged 2 weeks to 12 months
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`service-card ${service.bgClass}`}>
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <div className="service-title">
                    <Icon className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="price">{service.price}</span>
                    <a className="book-btn">Κάνε κράτηση</a>

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
