import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import OutfitCard from './outfitCard';
import OutfitItemsContainer from '../styledComponents/styledOutfit/outfitItemsContainer';
import AddOutfitContainer from '../styledComponents/styledOutfit/AddOutfitContainer';

const OutfitList = ({ product, getProduct, currentStyle }) => {
  const addOutfitCard = {
    isOutfitCard: true,
  };
  const [outfits, setOutfits] = useState([addOutfitCard]);

  const addOutfit = () => {
    const outfit = {
      isOutfitCard: false,
      name: product.name,
      productId: product.id,
      category: product.category,
      description: product.description,
      default: currentStyle['default?'],
      style: currentStyle.name,
      styleId: currentStyle.style_id,
      defaultPrice: currentStyle.original_price,
      salePrice: currentStyle.sale_price,
    };
    setOutfits([...outfits, outfit]);
  };

  return (
    <OutfitItemsContainer>
      {/* {outfits.map((outfit) => {
        outfit.isOutfitCard ? <AddOutfitContainer> </AddOutfitContainer>
      })} */}
    </OutfitItemsContainer>
  );
};

export default OutfitList;

OutfitList.propTypes = {
  // related: PropTypes.arrayOf(PropTypes.object),
  getProduct: PropTypes.func,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.string,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
};

OutfitList.defaultProps = {
  currentStyle: null,
  getProduct: PropTypes.func,
  product: null,
  // mainFeatures: null,
  // mainName: null,
};
