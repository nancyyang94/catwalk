import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import RelatedItemsContainer from '../styledComponents/styledRelated/relatedItemsContainer';

const RelatedItemsList = ({
  related, getProduct, comparisonModal,
}) => (
  <RelatedItemsContainer id="slider">
    {related.map((productInfo) => (
      <ProductCard
        key={productInfo.styleId}
        productInfo={productInfo}
        getProduct={getProduct}
        comparisonModal={comparisonModal}
        className="slide"
      />
    ))}
  </RelatedItemsContainer>
);
export default RelatedItemsList;

RelatedItemsList.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object),
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
};

RelatedItemsList.defaultProps = {
  related: null,
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
};
