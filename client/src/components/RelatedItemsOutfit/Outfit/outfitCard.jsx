import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from '../RelatedItems/imageGallery';
import Descriptions from '../RelatedItems/descriptions';
import RelatedAction from '../styledComponents/styledRelated/relatedAction';
import ProductContainer from '../styledComponents/styledRelated/productContainer';

const ProductCard = ({
  productInfo, getProduct,
}) => {
  const deleteOutfit = (event) => {
    event.stopPropagation();
  };

  return (
    <ProductContainer onClick={() => getProduct(productInfo.id)}>
      <RelatedAction type="button" onClick={(event) => deleteOutfit(event)}>X</RelatedAction>
      <ImageGallery photos={productInfo.photos} category={productInfo.category} />
      <Descriptions productInfo={productInfo} />
    </ProductContainer>
  );
};

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
  }),
  getProduct: PropTypes.func,
};

ProductCard.defaultProps = {
  productInfo: null,
  getProduct: PropTypes.func,
};
