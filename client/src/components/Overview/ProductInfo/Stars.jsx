import React from 'react';
import PropTypes from 'prop-types';
import StarsContainer from '../StyledComponents/ProductInfo/StarsContainer';
import StarReviews from '../SharedComponents/StarReviews';
import ReviewsNumContainer from '../StyledComponents/ProductInfo/ReviewsNumContainer';

const Stars = ({ reviews }) => {
  const { length } = reviews;

  const clickHandler = () => {
    window.scrollBy({
      top: 5000,
      behavior: 'smooth',
    });
  };

  return (
    <StarsContainer>
      <StarReviews reviews={reviews} />
      <ReviewsNumContainer onClick={clickHandler}>{`Read all ${length} reviews`}</ReviewsNumContainer>
    </StarsContainer>
  );
};

Stars.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

Stars.defaultProps = {
  reviews: null,
};
export default Stars;
