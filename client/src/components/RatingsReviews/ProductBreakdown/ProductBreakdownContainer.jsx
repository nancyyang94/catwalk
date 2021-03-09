import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import options from '../charOptions';
import IndividualFactor from './IndividualFactor';
import ProductBreakdownWrapper from '../styledComponents/ProductBreakdownWrapper';

function ProductBreakdownContainer({ id }) {
  // eslint-disable-next-line no-unused-vars
  const [characteristics, setCharacteristics] = useState('nothing');
  const [featureNames, setFeatureNames] = useState([]);

  useEffect(() => {
    axios.get(`/metaData/${id}`)
      .then(({ data }) => {
        setCharacteristics(data);
        const current = data.map((feature) => feature.name);
        setFeatureNames(current);
        console.log('expect names array:', current);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [id]);

  const allRatings = options.map((factor) => (
    <div>
      {featureNames && featureNames.includes(factor.name)
      && <IndividualFactor
        factor={factor.name}
        meaning1={factor[1]}
        meaning5={factor[5]}
        percentage="50%"
        key={`${id}${factor[2]}`}
      />}
    </div>
  ));

  // const allRatings = characteristics.map((factor) =>
  //   (<IndividualFactor
  //       factor={factor.name}
  //       meaning1={factor[1]}
  //       meaning5={factor[5]}
  //     value={factor.value}
  //     key={`${id}${factor[2]}`}
  //     />
  //   ));

  return (
    <ProductBreakdownWrapper>
      {allRatings}
    </ProductBreakdownWrapper>
  );
}

ProductBreakdownContainer.propTypes = {
  id: PropTypes.number,
};

ProductBreakdownContainer.defaultProps = {
  id: null,
};

export default ProductBreakdownContainer;
