import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import RelatedItemsContainer from '../styledComponents/styledRelated/relatedItemsContainer';

const RelatedItemsList = ({
  related, getProduct, comparisonModal, trackInteraction,
}) => {
  const items = {};
  return (
    <RelatedItemsContainer id="slider">
      {related.map((productInfo) => {
        if (items[productInfo.styleId] === undefined) {
          items[productInfo.styleId] = productInfo.styleId;
          return (
            <ProductCard
              key={productInfo.styleId}
              productInfo={productInfo}
              getProduct={getProduct}
              comparisonModal={comparisonModal}
              className="product"
              trackInteraction={trackInteraction}
            />
          );
        }
        return null;
      })}
    </RelatedItemsContainer>
  );
};
export default RelatedItemsList;

RelatedItemsList.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object),
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
  trackInteraction: PropTypes.func,
};

RelatedItemsList.defaultProps = {
  related: null,
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
  trackInteraction: PropTypes.func,
};
