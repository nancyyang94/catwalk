import React from 'react';
// import StarReviews from '../../RelatedItemsOutfit/sharedComponents/starReviews';
import StarsContainer from '../StyledComponents/ProductInfo/StarsContainer';

const Stars = ({ reviews }) => {
  const length = reviews.length;

  return (
    <StarsContainer>
      {`Read all ${length} reviews`}
    </StarsContainer>
  );
};

export default Stars;
