import React from 'react';
import PropTypes from 'prop-types';
import RatingsContainer from './styledComponents/RatingsContainer';
import StarReviews from '../RelatedItemsOutfit/sharedComponents/starReviews';
import RatingSummary from './RatingSummary';
import RatingsBreakdownContainer from './RatingsBreakdown/RatingsBreakdownContainer';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: null,
      // average: 0,
    };
    this.getPercentage = this.getPercentage.bind(this);
  }

  getPercentage(reviews) {
    let counter = 0;
    for (let i = 0; i < reviews.length; i++) {
      let currentReview = reviews[i];
      let recommendation = currentReview.recommend;
      if (recommendation) {
        counter += 1;
      }
    }
    const percentage = `${Math.floor((counter / reviews.length) * 100)}%`;
    return percentage;
  }

  render() {
    const { reviews } = this.props;
    // const { average } = this.state;
    return (
      <RatingsContainer>
        <h3>Ratings and Reviews</h3>
        <RatingSummary reviews={reviews} />
        {reviews && reviews.length > 0
        && <div>
          <p>
          {reviews.length} Reviews
          </p>
          <p>{this.getPercentage(reviews)} of reviews recommend this product</p>
        </div>}
        <RatingsBreakdownContainer />
      </RatingsContainer>
    );
  }
}

Ratings.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

Ratings.defaultProps = {
  reviews: null,
};

export default Ratings;
