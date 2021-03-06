import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings';
// import ReviewsList from './ReviewsList';
import ReviewsList from './ReviewsListRefactored';
import RatingsReviewsContainer from './styledComponents/RatingsReviewsContainer';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {
    const { product } = this.props;
  }

  render() {
    const { product } = this.props;
    return (
      <RatingsReviewsContainer>
        <Ratings />
        <ReviewsList product={product} productName={product.name} />
      </RatingsReviewsContainer>
    );
  }
}

RatingsReviews.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
};

RatingsReviews.defaultProps = {
  product: null,
};

export default RatingsReviews;
