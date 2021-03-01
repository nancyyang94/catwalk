import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

const IndividualReview = ({ review }) => {
  const {
    summary,
    rating,
    reviewer_name: reviewerName,
    date,
    body,
    helpfulness,
  } = review;

  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        size={24}
        activeColor="#525252"
        isHalf
        edit={false}
      />
      <p>{date}</p>
      <h3>{ summary }</h3>
      <p>{body}</p>
      <p>{reviewerName}</p>
      <p>{`Was this review helpful? Yes ${helpfulness}`}</p>
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
