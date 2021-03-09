import React from 'react';
import PropTypes from 'prop-types';
import FactorsContainer from '../styledComponents/FactorsContainer';

function IndividualFactor({
  factor, meaning1, meaning5, percentage,
}) {
  const factorBars = (
    <svg width="100%" height="15px">
      <g className="bars">
        <rect fill="#ebedee" width="100%" height="10" />
      </g>
      <g className="markers">
        <rect fill="ebedee" x={percentage} y="0" width="1.5" height="13px" />
      </g>
    </svg>
  );

  return (
    <div>
      <FactorsContainer>
        <div className="factor">
          <p>
            {factor}
            {' '}
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
    </div>
  );
}

IndividualFactor.propTypes = {
  meaning1: PropTypes.string,
  meaning5: PropTypes.string,
  factor: PropTypes.string,
  percentage: PropTypes.string,
};

IndividualFactor.defaultProps = {
  meaning1: null,
  meaning5: null,
  factor: null,
  percentage: null,
};
export default IndividualFactor;
