/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './imageGallery';
import Descriptions from './descriptions';
import ProductContainer from '../styledComponents/styledRelated/productContainer';
import RelatedAction from '../styledComponents/styledRelated/relatedAction';

const ProductCard = ({
  productInfo, getProduct, comparisonModal,
}) => (
  <ProductContainer to={{ pathname: `/product/${productInfo.id}` }} className="productContainer" onClick={() => { getProduct(productInfo.id); setTimeout(() => { window.location.reload(); }, 50); }}>
    <RelatedAction type="button" onClick={(event) => comparisonModal(event, productInfo.features, productInfo.name)}>☆</RelatedAction>
    <ImageGallery photos={productInfo.photos} category={productInfo.category} />
    <Descriptions productInfo={productInfo} />
  </ProductContainer>
);
ProductCard.displayName = 'productCard';
export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    defaultPrice: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
    salePrice: PropTypes.string,
    default: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
    styleId: PropTypes.number,
    style: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.object),
  }),
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
};

ProductCard.defaultProps = {
  productInfo: null,
  getProduct: PropTypes.func,
  comparisonModal: PropTypes.func,
};
