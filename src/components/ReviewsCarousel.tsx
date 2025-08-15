import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
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

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((data: ReviewsApiResponse) => setReviews(data.reviews || []))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-title">Τι είπαν για εμάς</h2>

      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="reviews-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card map-style">
              <div className="review-header">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="review-avatar"
                />
                <div>
                  <h3 className="review-name">{review.author_name}</h3>
                  <div className="review-stars">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
