import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRatings';

const StarReviews = ({ reviews }) => {
  const [averageRating, setAverageRating] = useState(0);
  const getAverageRating = (ratings) => {
    let counter = 0;
    for (let i = 0; i < ratings.length; i += 1) {
      counter += ratings[i].rating;
    }
    const average = counter / ratings.length;
    setAverageRating(average);
  };

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        if (reviews !== null && reviews.length) {
          getAverageRating(reviews);
        }
      }
    }, 10);
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
