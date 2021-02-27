import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';

const RelatedItemsList = ({ related }) => (
  <div>
    {related.map((productInfo) => (
      <ProductCard key={productInfo.styleId} productInfo={productInfo} />
    ))}
  </div>
);
export default RelatedItemsList;

RelatedItemsList.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object),
};

RelatedItemsList.defaultProps = {
  related: null,
};
