import React from 'react';
import PropTypes from 'prop-types';
import mockData from './mockData';
import IndividualReview from './IndividualReview';
import ReviewListContainer from './styledComponents/ReviewListContainer';
import NewReview from './NewReview';

console.log(mockData);

const ReviewsList = (props) => {
  const { productName } = props;
  return (
    <ReviewListContainer>
      <h3>Reviews List</h3>
      <div className="sort">
        <p>
          248 reviews sorted by
          <button type="button">
            relevance
          </button>
        </p>
      </div>
      {mockData.map((review) => (
        <IndividualReview review={review} key={review.review_id} />
      ))}
      <button type="button">More Reviews</button>
      <NewReview productName={productName} />
    </ReviewListContainer>
  );
};

ReviewsList.propTypes = {
  productName: PropTypes.string,
};

ReviewsList.defaultProps = {
  productName: null,
};

export default ReviewsList;
