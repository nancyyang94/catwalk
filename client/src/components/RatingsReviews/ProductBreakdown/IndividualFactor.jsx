import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FactorsContainer from '../styledComponents/FactorsContainer';
import getReviewsMeta from '/server/getReviewsMeta';

function IndividualFactor(props) {
  const { factor } = props;
  const { meaning1 } = props;
  const { meaning5 } = props;
  const { percentage } = props;

  const factorBars = (
    <svg width="100%" height="15px">
      <g className="bars">
        <rect fill="#ebedee" width="100%" height="10" />
      </g>
      <g className="markers">
         <rect fill="ebedee" x={percentage} y='0' width='1.5' height="13px"/>
        </g>
    </svg>
  );

  return (
    <div>
        <FactorsContainer>
          <div className="factor">
          <p>
            {factor}{' '}
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
