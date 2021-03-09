import React from 'react';
import PropTypes from 'prop-types';
import options from '../charOptions';
import IndividualFactor from './IndividualFactor';
import ProductBreakdownWrapper from '../styledComponents/ProductBreakdownWrapper';

function ProductBreakdownContainer(props) {
  const { reviews } = props;
  const { total } = props;
  const { id } = props;
  const allRatings = options.map((factor) => <IndividualFactor
    factor={factor.name}
    id={id}
    meaning1={factor[1]}
    meaning5={factor[5]}/>);

  return (
    <ProductBreakdownWrapper>
      {allRatings}
      {console.log('reviews:', reviews)}
    </ProductBreakdownWrapper>
  );
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
