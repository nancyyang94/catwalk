/* eslint-disable no-console */
import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import OutfitCard from './outfitCard';
import OutfitItemsContainer from '../styledComponents/styledOutfit/outfitItemsContainer';
import AddOutfitContainer from '../styledComponents/styledOutfit/addOutfitContainer';

const OutfitList = ({
  product, getProduct, currentStyle, updateButton,
}) => {
  const addOutfitCard = {
    isOutfitCard: true,
    id: 'addOutfitCard',
  };
  const useStateReducer = (prevState, dispatchArg) => (typeof dispatchArg === 'function' ? dispatchArg(prevState) : dispatchArg);

  const useStateInitializer = (initialArg) => (typeof initialArg === 'function' ? initialArg() : initialArg
  );

  const useState = (initialValue = [addOutfitCard]) => (
    useReducer(useStateReducer, initialValue, useStateInitializer));

  const [outfits, setOutfits] = useState(() => {
    const localData = localStorage.getItem('outfits');
    return localData ? JSON.parse(localData) : [addOutfitCard];
  });

  useEffect(() => {
    localStorage.setItem('outfits', JSON.stringify(outfits));
    axios.put('/updateOutfits', { user: outfits })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [outfits]);

  useEffect(() => {
    updateButton();
  }, [outfits]);

  const addOutfit = (event) => {
    const outfit = {
      isOutfitCard: false,
      name: product.name,
      id: product.id,
      category: product.category,
      description: product.description,
      default: currentStyle['default?'],
      style: currentStyle.name,
      styleId: currentStyle.style_id,
      defaultPrice: currentStyle.original_price,
      salePrice: currentStyle.sale_price,
      photos: currentStyle.photos,
      slogan: product.slogan,
      reviews: product.reviews,
    };
    setOutfits(() => {
      const localData = localStorage.getItem('outfits');
      return localData ? JSON.parse(localData) : [addOutfitCard];
    });
    axios.put('/updateOutfits', { user: outfits })
      .then(() => {
        axios.post('/addOutfit', outfit)
          .then((response) => {
            setOutfits(outfits.concat(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      });
    updateButton();
    event.stopPropagation();
  };

  const deleteOutfit = (event) => {
    axios.put('/updateOutfits', { user: outfits, styleId: Number(event.target.name) })
      .then((response) => {
        axios.delete('/deleteOutfit', { data: { styleId: response.data } })
          .then((response2) => {
            setOutfits(response2.data);
            updateButton();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    event.stopPropagation();
  };

  return (
    <OutfitItemsContainer id="slider2">
      {outfits.map((outfit) => (
        outfit.isOutfitCard ? (
          <AddOutfitContainer key="addOutfit" onClick={(event) => addOutfit(event)}>
            <h1>+</h1>
            <div>
              Add Outfit
            </div>
          </AddOutfitContainer>
        ) : (
          <OutfitCard
            productInfo={outfit}
            key={outfit.styleId}
            getProduct={getProduct}
            deleteOutfit={deleteOutfit}
          />
        )
      ))}
    </OutfitItemsContainer>
  );
};

export default OutfitList;

OutfitList.propTypes = {
  // related: PropTypes.arrayOf(PropTypes.object),
  getProduct: PropTypes.func,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
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
    reviews: PropTypes.arrayOf(PropTypes.object),
  }),
  updateButton: PropTypes.func,
};

OutfitList.defaultProps = {
  currentStyle: null,
  getProduct: PropTypes.func,
  product: null,
  updateButton: PropTypes.func,
};
