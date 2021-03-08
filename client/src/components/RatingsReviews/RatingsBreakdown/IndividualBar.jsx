import React from 'react';
import BarContainer from '../styledComponents/BarContainer';

// import PropTypes from 'prop-types';

const width = '45%';

const bars = (
  <svg width="90%" height="15px">
    <g className="bars">
      <rect fill="#ebedee" width="100%" height="10" />
      <rect fill="#C7EA46" width={width} height="10" />
    </g>
  </svg>
);

const IndividualBar = () => (
  <BarContainer>
    <div className="stars">
      <p>5 Stars</p>
    </div>
    <div className="bars">
      {bars}
    </div>
    <div>
      <p>10</p>
    </div>
  </BarContainer>
);

/* // IndividualBar.propTypes = {
//   avg: PropTypes.number,
// };
// IndividualBar.defaultProps = {
//   avg: 0,
// }; */

export default IndividualBar;
