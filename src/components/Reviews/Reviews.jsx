import React from "react";
import './Reviews.css';

const Reviews = ({ reviews }) => {
    <div className="reviews-container">
        <h2 className="reviews-title">Reviews</h2>
        {reviews.length > 0 ? (
            <ul className="reviews-list">
                {reviews.map(review => (
                    <li key={review.id} className="review-item">
                        <p className="review-author">{review.author}</p>
                        <p className="review-content">{review.content}</p>
                    </li>
                ))}
            </ul>
            
        ) : (
            <p className="no-reviews">No reviews available for this movie</p>
        )};
    </div>
};

export default Reviews;