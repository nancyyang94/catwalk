import React from 'react';
import PropTypes from 'prop-types';
import IndividualBar from './IndividualBar';

function RatingsBreakdownContainer(props) {
  const { reviews } = props;
  const { total } = props;
  const numbers = [1, 2, 3, 4, 5];
  const allRatings = numbers.map((number) => <IndividualBar
    reviews={reviews}
    total={total}
    number={number} />);
  return (
    <div>
      {allRatings}
    </div>
  );
}

RatingsBreakdownContainer.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

RatingsBreakdownContainer.defaultProps = {
  reviews: null,
  total: null,
};

export default RatingsBreakdownContainer;
