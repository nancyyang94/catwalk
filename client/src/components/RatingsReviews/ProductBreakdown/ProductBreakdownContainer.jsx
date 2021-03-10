import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import options from './Options';
import IndividualFactor from './IndividualFactor';
import ProductBreakdownWrapper from '../styledComponents/ProductBreakdownWrapper';

function ProductBreakdownContainer({ id }) {
  const [featureNames, setFeatureNames] = useState([]);
  const [featureIds, setFeatureIds] = useState([]);
  const [values, setValues] = useState(0);

  useEffect(() => {
    axios.get(`/metaData/${id}`)
      .then(({ data }) => {
        setFeatureNames(data.map((feature) => feature.name));
        setFeatureIds(data.map((feature) => feature.id));
        setValues(data.map((feature) => feature.value));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [id]);

  const allRatings = featureNames.map((name, index) => (
    <div key={`${Math.random()}`}>
      {featureNames.length > 0 && values[index]
      && (
      <IndividualFactor
        key={`${Math.random()}`}
        factor={name}
        meaning1={options[name][1]}
        meaning5={options[name][5]}
        percentage={`${((values[index]) / 5) * 100}%`}
      />
      )}
    </div>
  ));

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
