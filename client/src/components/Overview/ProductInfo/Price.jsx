import React from 'react';
import PropTypes from 'prop-types';

const Price = (props) => {
  const { originalPrice, salePrice } = props;
  if (salePrice === null) {
    return (
      <div>
        <div>{`$${originalPrice}`}</div>
      </div>
    );
  }
  return (
    <div>
      <div>{`$${originalPrice} SALE: $${salePrice}`}</div>
    </div>
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
