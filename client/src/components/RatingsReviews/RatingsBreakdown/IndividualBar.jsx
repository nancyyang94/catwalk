import React from 'react';
import PropTypes from 'prop-types';
import BarContainer from '../styledComponents/BarContainer';

function IndividualBar(props) {
  const { reviews } = props;
  const { total } = props;
  const { number } = props;
  let counter = 0;

  for (let i = 0; i < reviews.length; i += 1) {
    const currentReview = reviews[i];
    if (currentReview.rating === number) {
      counter += 1;
    }
  }

  const percentage = `${(counter / total) * 100}%`;

  const bars = (
    <svg width="90%" height="15px">
      <g className="bars">
        <rect fill="#a9a9aa" width="100%" height="4px" />
        <rect fill="#45da70" width={percentage} height="4px" />
      </g>
    </svg>
  );

  return (
    <BarContainer>
      <div className="stars">
        <p>
          {number}
          {' '}
          Stars
        </p>
      </div>
      <div className="bars">
        {bars}
      </div>
      <div className="counter">
        <p>{counter}</p>
      </div>
    </BarContainer>
  );
}

IndividualBar.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  number: PropTypes.number,
};

IndividualBar.defaultProps = {
  reviews: null,
  total: null,
  number: null,
};
export default IndividualBar;
