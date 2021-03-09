import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import options from '../charOptions';
import IndividualFactor from './IndividualFactor';
import ProductBreakdownWrapper from '../styledComponents/ProductBreakdownWrapper';

function ProductBreakdownContainer({ reviews, total, id }) {
  const [characteristics, setCharacteristics] = useState('nothing');
  const [featureNames, setFeatureNames] = useState([]);

  // let test;

  useEffect(() => {
    axios.get(`/metaData/${id}`)
    .then((response) => {
      console.log(response.data);
      setCharacteristics(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [id]);


  const allRatings = options.map((factor) => <IndividualFactor
    factor={factor.name}
    meaning1={factor[1]}
    meaning5={factor[5]}
    percentage={'50%'}
    />);

  // const allRatings = options.map((factor) => {
  //   if (featureNames && featureNames.includes(factor)) {
  //     <IndividualFactor
  //     factor={factor.name}
  //     meaning1={factor[1]}
  //     meaning5={factor[5]}
  //     percentage={'50%'}
  //   />
  //   }
  // });

  return (
    <ProductBreakdownWrapper>
      {allRatings}
    </ProductBreakdownWrapper>
  );

  // function renderBar(feature) {
  //   return (
  //     <IndividualFactor factor={feature} meaning1={options[feature]['1']} meaning5={options[feature]['5']} percentage={'50%'} />
  //   );
  // }


  // return (
  //   <ProductBreakdownWrapper>
  //     {featureNames && featureNames.map(function(factor) { return <IndividualFactor factor={factor} meaning1={options[factor]['1']} meaning5={options[factor]['5']} percentage={'50%'} />})}
  //     {/* {featureNames && featureNames.map((factor) => renderBar(factor))} */}
  //   </ProductBreakdownWrapper>
  // );

}

ProductBreakdownContainer.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

ProductBreakdownContainer.defaultProps = {
  reviews: null,
  total: null,
};

export default ProductBreakdownContainer;
