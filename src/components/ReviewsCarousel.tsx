import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/reviewscarousel.css";

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
}

interface ReviewsApiResponse {
  reviews: GoogleReview[];
}

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((data: ReviewsApiResponse) => setReviews(data.reviews || []))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-title">Τι είπαν για εμάς</h2>

      <div className="carousel-container">
        <AnimatePresence mode="wait">
          {reviews.length > 0 && (
            <motion.div
              key={index}
              className="review-card map-style"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.6 }}
            >
              <div className="review-header">
                <img
                  src={reviews[index].profile_photo_url}
                  alt={reviews[index].author_name}
                  className="review-avatar"
                />
                <div>
                  <h3 className="review-name">{reviews[index].author_name}</h3>
                  <div className="review-stars">
                    {"★".repeat(reviews[index].rating) +
                      "☆".repeat(5 - reviews[index].rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">{reviews[index].text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="carousel-controls">
          <button onClick={prevReview}>‹</button>
          <button onClick={nextReview}>›</button>
        </div>
      </div>
    </div>
  );
}
