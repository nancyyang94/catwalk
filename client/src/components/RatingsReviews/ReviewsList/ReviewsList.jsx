import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IndividualReview from './IndividualReview';
import ReviewListContainer from '../styledComponents/ReviewListContainer';
import ReviewListButtonsContainer from '../styledComponents/ReviewListButtons';

const ReviewsList = ({ product }) => {
  const { reviews = [] } = product;
  // initialize for first two reviews
  const [currentReviews, setCurrentReviews] = useState([]);
  // track when product changes
  useEffect(() => {
    setCurrentReviews(reviews.slice(0, 2));
  }, [product]);

  // display two more reviews
  const loadMore = () => {
    const nextNumber = currentReviews.length + 2;
    const updatedReviews = reviews.slice(0, nextNumber);
    setCurrentReviews(updatedReviews);
  };

  return (
    <div>
      <ReviewListContainer>
        <div className="individual">
          {
            currentReviews
              .map((review) => <IndividualReview review={review} key={review.review_id} />)
          }
        </div>
        <br />
      </ReviewListContainer>
      <ReviewListButtonsContainer>
        {(currentReviews.length < reviews.length) && <div className="more-reviews"><button type="button" onClick={loadMore}>Load More + </button></div>}
        <br />
        <div className="new-review">
          <button type="button">
            Write a Review +
          </button>
        </div>
      </ReviewListButtonsContainer>
    </div>
  );
};

ReviewsList.propTypes = {
  product: PropTypes.shape(
    {
      id: PropTypes.string,
      reviews: PropTypes.arrayOf(PropTypes.shape()),
    },
  ).isRequired,
};

export default ReviewsList;
