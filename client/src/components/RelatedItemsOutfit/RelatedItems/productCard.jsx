import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './imageGallery';
import Descriptions from './descriptions';

const ProductCard = ({ productInfo }) => (
  <div>
    <ImageGallery photos={productInfo.photos} />
    <Descriptions productInfo={productInfo} />
  </div>
);

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
};

ProductCard.defaultProps = {
  productInfo: null,
};
