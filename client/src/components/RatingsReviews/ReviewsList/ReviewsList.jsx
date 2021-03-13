import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IndividualReview from './IndividualReview';
import ReviewListContainer from '../styledComponents/ReviewListContainer';
import ReviewListButtonsContainer from '../styledComponents/ReviewListButtons';
import NewReview from './NewReview';

function ReviewsList({ product }) {
  const { reviews } = product;
  const { id } = product;
  // initialize for first two reviews
  const [lastIndex, setLastIndex] = useState(2);
  // track when product changes
  useEffect(() => {
    setLastIndex(2);
  }, [id]);

  // display two more reviews
  const setIndex = () => {
    setLastIndex((prevIndex) => prevIndex + 2);
  };

  return (
    <div>
      <ReviewListContainer>
        <div className="individual">
          {
            reviews
            && reviews.slice(0, lastIndex)
              .map((review) => <IndividualReview review={review} key={review.review_id} />)
          }
        </div>
        <br />
      </ReviewListContainer>
      <ReviewListButtonsContainer>
        {reviews && (reviews.length > 2) && (lastIndex < reviews.length) && <div className="more-reviews"><button type="button" onClick={setIndex}>Load More + </button></div>}
        <br />
        <div className="new-review">
          <button type="button">
            Write a Review +
          </button>
        </div>
      </ReviewListButtonsContainer>
    </div>
  );
}

ReviewsList.propTypes = {
  product: PropTypes.shape(),
};

ReviewsList.defaultProps = {
  product: null,
};

export default ReviewsList;
