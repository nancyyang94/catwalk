import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AverageStarRating from './AverageStarRating';

const RatingSummary = ({ reviews }) => {
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
    }, 50);

    return () => {
      unmounted = true;
    };
  }, [reviews]);

  return (
    <>
      <AverageStarRating avg={averageRating} />
    </>
  );
};

export default RatingSummary;

RatingSummary.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

RatingSummary.defaultProps = {
  reviews: null,
};
