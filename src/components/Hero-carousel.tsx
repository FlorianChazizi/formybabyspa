import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import baby1 from '../assets/baby1.jpeg';
import baby2 from '../assets/baby2.jpeg';
import baby3 from '../assets/baby3.jpeg';

import '../styles/hero-carousel.css'; 

const slides = [
  {
    image: baby1,
    title: "For My Baby Spa Κατερίνη",
    subtitle: "Gentle relaxation and wellness for your precious little one",
    gradient: "gradient-1"
  },
  {
    image: baby2,
    title: "Tranquil Environment",
    subtitle: "Safe, clean, and designed specially for babies",
    gradient: "gradient-2"
  },
  {
    image: baby3,
    title: "Expert Care",
    subtitle: "Certified professionals ensuring your baby's comfort and safety",
    gradient: "gradient-3"
  }
];


export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className={`gradient-overlay ${slide.gradient}`}></div>
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="carousel-text">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="carousel-buttons">
                <button className="btn primary">Book Appointment</button>
                <button className="btn secondary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="arrow left">
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className="arrow right">
        <ChevronRight />
      </button>
    </section>
  );
}