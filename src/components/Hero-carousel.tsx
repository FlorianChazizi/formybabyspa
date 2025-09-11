import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

// import vid1 from "../assets/vid1.mov";
import vid2 from "../assets/vid2.mov";
import vid3 from "../assets/vid3.mov";
// import vid4 from "../assets/vid4.mov";

import "../styles/hero-carousel.css";

const videos = [vid2, vid3];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // 
    }
  }, [currentSlide]); // run every time we switch video

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="home" className="hero-carousel">
      <div className="carousel-container " data-aos="fade-in">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`carousel-slide gradient-overlay gradient-1 ${
              index === currentSlide ? "active" : ""
            }`}
          >
            {index === currentSlide && (
              <video
                ref={videoRef}
                src={video}
                className="carousel-video"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            )}
          </div>
        ))}
      </div>

      <div className="carousel-overlay-text">
        <h1>For my Baby Spa Κατερίνη</h1>
      </div>


      {/* Dots */}
      <div className="carousel-dots">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="arrow left" aria-label="προηγούμενη">
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className="arrow right" aria-label="επόμενη">
        <ChevronRight />
      </button>
    </section>
  );
}
