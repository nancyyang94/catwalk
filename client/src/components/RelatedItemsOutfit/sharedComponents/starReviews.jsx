import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRatings';

const StarReviews = ({ reviews }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [reviewIds, setReviewIds] = useState([]);
  const getAverageRating = (ratings) => {
    let counter = 0;
    const reviewKeys = [];
    for (let i = 0; i < ratings.length; i += 1) {
      counter += ratings[i].rating;
      reviewKeys.push(ratings.review_id);
    }
    const average = counter / ratings.length;
    setAverageRating(average);
    setReviewIds(reviewIds);
  };

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        if (reviews !== null && reviews.length) {
          getAverageRating(reviews);
        }
      }
    }, 50);
    return () => {
      unmounted = true;
    };
  }, [reviews]);

  return (
    <StarRating avg={averageRating} />
  );
};

export default StarReviews;

StarReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

StarReviews.defaultProps = {
  reviews: null,
};
