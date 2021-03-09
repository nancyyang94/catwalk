import React from 'react';
import PropTypes from 'prop-types';
import FactorsContainer from '../styledComponents/FactorsContainer';
import getReviewsMeta from '/server/getReviewsMeta';

function IndividualFactor(props) {
  const { factor } = props;
  const { meaning1 } = props;
  const { meaning5 } = props;
  const { id } = props;

  const percentage = '50%';

  const factors = getReviewsMeta(id).then((response) => {
    return response.data.characteristics;
  }).catch((error) => {
    console.log(error);
  })

  let characteristic;
  let value;

  const fulfilledFactors = factors.then((response) => {
    for (var key in response) {
      characteristic = key;
      value = response[key].value;
    }
  })


  const factorBars = (
    <svg width="100%" height="15px">
      <g className="bars">
        <rect fill="#ebedee" width="100%" height="10" />
      </g>
      <g className="markers">
        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
         <polygon points="50 15, 100 100, 0 100" fill="ebedee" width="10%" height="10%" x="75"/></svg>
        </g> */}
         <rect fill="ebedee" x={percentage} y='0' width='1.5' height="13px"/>
        </g>
    </svg>
  );

  return (
    <div>
      {id !== undefined &&
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
      </FactorsContainer>}
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
