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

const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/reviews`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data: ReviewsApiResponse = await res.json();
        setReviews(data.reviews || []);
      } catch (err) {
        // Fail silently – just keep reviews as empty array
        console.warn("Reviews API unavailable, skipping carousel.", err);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setIndex((prev) => (reviews.length > 0 ? (prev + 1) % reviews.length : 0));
  };

  const prevReview = () => {
    setIndex((prev) => (reviews.length > 0 ? (prev - 1 + reviews.length) % reviews.length : 0));
  };

  if (reviews.length === 0) {
    // Optional: return null to render nothing if API fails
    return null;
  }

  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-title">Τι είπαν για εμάς</h2>

      <div className="carousel-container-review">
        <AnimatePresence mode="wait">
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
                loading="lazy"
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
        </AnimatePresence>

        <div className="carousel-controls">
          <button onClick={prevReview} aria-label="προηγούμενη κριτική">‹</button>
          <button onClick={nextReview} aria-label="επόμενη κριτική">›</button>
        </div>
      </div>
    </div>
  );
}
