import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import RelatedItemsContainer from '../styledComponents/relatedItemsContainer';

const RelatedItemsList = ({
  related, getProduct, mainFeatures, mainName,
}) => (
  <RelatedItemsContainer id="slider">
    {related.map((productInfo) => (
      <ProductCard
        key={productInfo.styleId}
        productInfo={productInfo}
        getProduct={getProduct}
        mainFeatures={mainFeatures}
        mainName={mainName}
        className="slide"
      />
    ))}
  </RelatedItemsContainer>
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
  mainName: null,
};
