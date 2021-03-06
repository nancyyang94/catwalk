import React from 'react';
import PropTypes from 'prop-types';
import RatingsContainer from './styledComponents/RatingsContainer';
import StarReviews from '../RelatedItemsOutfit/sharedComponents/starReviews';
import AverageRatingContainer from './styledComponents/AverageRatingContainer';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      average: 0,
    };
  }

  render() {
    const { reviews } = this.props;
    return (
      <RatingsContainer>
        <h3>Ratings and Reviews</h3>
        <AverageRatingContainer>
          <StarReviews reviews={reviews} />
        </AverageRatingContainer>
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
