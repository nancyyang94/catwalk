import React from 'react';
import PropTypes from 'prop-types';
import RatingsContainer from './styledComponents/RatingsContainer';
// import StarReviews from '../RelatedItemsOutfit/sharedComponents/starReviews';
import RatingSummary from './RatingSummary';
import RatingsBreakdownContainer from './RatingsBreakdown/RatingsBreakdownContainer';
import ProductBreakdownContainer from './ProductBreakdown/ProductBreakdownContainer';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getPercentage = this.getPercentage.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  getPercentage(reviews) {
    let counter = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      const currentReview = reviews[i];
      const recommendation = currentReview.recommend;
      if (recommendation) {
        counter += 1;
      }
    }
    const percentage = `${Math.floor((counter / reviews.length) * 100)}%`;
    return percentage;
  }

  render() {
    const { reviews } = this.props;
    const { id } = this.props;
    return (
      <RatingsContainer>
        <h3>Ratings and Reviews</h3>
        <RatingSummary reviews={reviews} />
        {reviews && reviews.length > 0
        && (
        <div>
          <p>
            {reviews.length}
            Reviews
          </p>
          <p>
            {this.getPercentage(reviews)}
            of reviews recommend this product
          </p>
          <RatingsBreakdownContainer reviews={reviews} total={reviews.length} id={id} />
          <ProductBreakdownContainer reviews={reviews} total={reviews.length} id={id} />
        </div>
        )}
      </RatingsContainer>
    );
  }
}

Ratings.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
};

Ratings.defaultProps = {
  reviews: null,
  id: null,
};

export default Ratings;
