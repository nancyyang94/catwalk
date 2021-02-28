import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import RelatedContainer from '../styledComponents/relatedContainer';

const RelatedItemsList = ({
  related, getProduct, mainFeatures, mainName,
}) => (
  <RelatedContainer>
    {related.map((productInfo) => (
      <ProductCard
        key={productInfo.styleId}
        productInfo={productInfo}
        getProduct={getProduct}
        mainFeatures={mainFeatures}
        mainName={mainName}
      />
    ))}
  </RelatedContainer>
);
export default RelatedItemsList;

RelatedItemsList.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object),
  getProduct: PropTypes.func,
  mainFeatures: PropTypes.arrayOf(PropTypes.object),
  mainName: PropTypes.string,
};

RelatedItemsList.defaultProps = {
  related: null,
  getProduct: PropTypes.func,
  mainFeatures: null,
  mainName: PropTypes.string,
};
