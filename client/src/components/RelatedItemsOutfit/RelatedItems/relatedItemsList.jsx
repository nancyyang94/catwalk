import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import RelatedContainer from '../styledComponents/relatedContainer';

const RelatedItemsList = ({ related }) => (
  <RelatedContainer>
    {related.map((productInfo) => (
      <ProductCard key={productInfo.styleId} productInfo={productInfo} />
    ))}
  </RelatedContainer>
);
export default RelatedItemsList;

RelatedItemsList.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object),
};

RelatedItemsList.defaultProps = {
  related: null,
};
