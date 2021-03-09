import React from 'react';
import PropTypes from 'prop-types';
import FactorsContainer from '../styledComponents/FactorsContainer';

function IndividualFactor(props) {
  const { factor } = props;
  const { meaning1 } = props;
  const { meaning5 } = props;

  const percentage = '50%';

  const factorBars = (
    <svg width="100%" height="15px">
      <g className="bars">
        <rect fill="#ebedee" width="100%" height="10" />
        {/* <rect fill="#a9a9a9" width={percentage} height="10" /> */}
      </g>
    </svg>
  );

  return (
    <FactorsContainer>
        <div className="factor">
        <p>
          {factor}
        </p>
      </div>
      <div className="bars">
        {factorBars}
      </div>
      <div className="meanings">
        <p>{meaning1}</p>
        <p>{meaning5}</p>
      </div>
    </FactorsContainer>
  );
}

IndividualFactor.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  factor: PropTypes.string,
};

IndividualFactor.defaultProps = {
  reviews: null,
  total: null,
  factor: null,
};
export default IndividualFactor;
