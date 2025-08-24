import { useState } from "react";
import "../styles/gallery.css";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Baby Spa Gallery</h2>

        {/* Grid of images */}
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className="gallery-item"
            >
              <img src={img.src} alt={img.alt} className="gallery-img" />
              <div className="gallery-overlay" />
            </button>
          ))}
        </div>

        {/* Lightbox modal */}
        {selected !== null && (
          <div
            className="gallery-lightbox"
            onClick={() => setSelected(null)}
          >
            <div className="gallery-lightbox-content">
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="gallery-lightbox-img"
              />
              <button
                onClick={() => setSelected(null)}
                className="gallery-close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
