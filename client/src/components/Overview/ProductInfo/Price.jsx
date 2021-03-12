import React from 'react';
import PropTypes from 'prop-types';
import PriceText from '../StyledComponents/ProductInfo/PriceText';
import OnSaleText from '../StyledComponents/ProductInfo/OnSaleText';
import PriceContainer from '../StyledComponents/ProductInfo/PriceContainer';

const Price = (props) => {
  const { originalPrice, salePrice } = props;
  if (salePrice === null) {
    return (
      <PriceContainer>
        <PriceText sale={false}>{`$${originalPrice}`}</PriceText>
      </PriceContainer>
    );
  }
  return (
    <PriceContainer>
      <OnSaleText>{`$${originalPrice}`}</OnSaleText>
      <PriceText sale={salePrice !== null}>{`$${salePrice}`}</PriceText>
    </PriceContainer>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string,
  salePrice: PropTypes.string,
};

Price.defaultProps = {
  originalPrice: null,
  salePrice: null,
};

export default Price;
