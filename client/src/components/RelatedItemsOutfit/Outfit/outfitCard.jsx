import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from '../RelatedItems/imageGallery';
import Descriptions from '../RelatedItems/descriptions';
import OutfitAction from '../styledComponents/styledOutfit/outfitAction';
import ProductContainer from '../styledComponents/styledRelated/productContainer';

const OutfitCard = ({ productInfo, getProduct, deleteOutfit }) => (
  <ProductContainer onClick={() => getProduct(productInfo.id)}>
    <OutfitAction type="button" name={productInfo.id} onClick={(event) => deleteOutfit(event)}>X</OutfitAction>
    <ImageGallery photos={productInfo.photos} category={productInfo.category} />
    <Descriptions productInfo={productInfo} />
  </ProductContainer>
);

export default OutfitCard;

OutfitCard.propTypes = {
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
  deleteOutfit: PropTypes.func,
};

OutfitCard.defaultProps = {
  productInfo: null,
  getProduct: PropTypes.func,
  deleteOutfit: PropTypes.func,
};
