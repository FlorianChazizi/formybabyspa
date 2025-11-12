import '../styles/service-section.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// 👇 import your shared data (the one we made earlier)
import { services } from "../data/ServicesData";

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
              <div
                key={index}
                className={`service-card ${service.bgClass}`}
                data-aos="fade-right"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-content">
                  <div className="service-title">
                    <Icon className="service-icon" />
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <a className="book-btn" href="#radevou">
                      Κάνε κράτηση
                    </a>
                    <Link to={service.link} className="learn-more-btn">
                      Μάθε περισσότερα
                    </Link>
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
