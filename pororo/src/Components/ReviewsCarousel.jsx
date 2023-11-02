import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewsCarousel = () => {
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Delicious cakes and great service! I keep coming back for more.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Sweet Addictions never disappoints. Their cakes are a true delight.',
    },
    {
      id: 3,
      author: 'David Johnson',
      content: 'I ordered a cake for a special occasion, and it was a big hit! Thanks, Sweet Addictions.',
    },
  ];

  return (
    <div className="reviews-carousel">
      <Carousel showStatus={false} showArrows={true} showThumbs={false}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide">
            <p className="review-content">{review.content}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
