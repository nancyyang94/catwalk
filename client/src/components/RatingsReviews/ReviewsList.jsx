import React from 'react';
import PropTypes from 'prop-types';
import IndividualReview from './IndividualReview';
import ReviewListContainer from './styledComponents/ReviewListContainer';
import NewReview from './NewReview';

const ReviewsList = ({ product }) => {
  const { reviews } = product;
  let list;

  if (reviews) {
    list = reviews.map((review) => <IndividualReview review={review} />);
  }

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
        {list}
      </div>
      <button type="button">More Reviews</button>
      <NewReview productName={product.name} />
    </ReviewListContainer>
  );
};

ReviewsList.propTypes = {
  product: PropTypes.shape(),
};

ReviewsList.defaultProps = {
  product: null,
};

export default ReviewsList;
