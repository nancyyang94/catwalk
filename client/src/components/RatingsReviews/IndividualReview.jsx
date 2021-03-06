import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRatings';

const IndividualReview = ({ review }) => {
  const {
    summary,
    rating,
    reviewer_name: reviewerName,
    date,
    body,
    helpfulness,
  } = review;

  let stars;
  if (rating) {
    stars = StarRating(rating);
  }

  return (
    <div>
      {stars}
      <p>{date}</p>
      <h3>{ summary }</h3>
      <p>{body}</p>
      <p>{reviewerName}</p>
      <p>{`Was this review helpful? Yes (${helpfulness})`}</p>
    </div>
  );
};

IndividualReview.propTypes = {
  summary: PropTypes.string,
  review: PropTypes.shape(),
};

IndividualReview.defaultProps = {
  summary: null,
  review: {},
};

export default IndividualReview;
