import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
  height: 150px;
`;
// props.product = { id: 14931, name: Manuela Pants}

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {
    const { product } = this.props;
    console.log('should be our product object:', { product });
  }

  render() {
    return (
      <Wrapper>
        <Ratings />
        <ReviewsList />
      </Wrapper>
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
