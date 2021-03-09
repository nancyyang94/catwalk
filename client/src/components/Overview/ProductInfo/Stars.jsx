import React from 'react';
// import StarReviews from '../../RelatedItemsOutfit/sharedComponents/starReviews';
import StarsContainer from '../StyledComponents/ProductInfo/StarsContainer';
import StarReviews from '../SharedComponents/StarReviews';
import ReviewsNumContainer from '../StyledComponents/ProductInfo/ReviewsNumContainer';

const Stars = ({ reviews }) => {
  const length = reviews.length;

  return (
    <StarsContainer>
      <StarReviews reviews={reviews} />
      <ReviewsNumContainer>{`Read all ${length} reviews`}</ReviewsNumContainer>
    </StarsContainer>
  );
};

export default Stars;
