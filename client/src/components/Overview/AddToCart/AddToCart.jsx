import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InnerContainer from '../StyledComponents/AddToCart/InnerContainer';
import SelectorContainer from '../StyledComponents/AddToCart/SelectorContainer';
import NextRowContainer from '../StyledComponents/AddToCart/NextRowContainer';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import Bag from './Bag';

const AddToCart = ({ styleId, skus }) => {
  // const [currentSizes, setCurrentSizes] = useState([]);
  const [currentSelectedId, setCurrentSelectedId] = useState('default');
  const [currentCount, setCurrentCount] = useState(1);

  const handleSizeClick = (num) => {
    setCurrentSelectedId(num);
  };

  const handleQuantityClick = (num) => {
    setCurrentCount(num);
  };

  const makeSizeTuples = () => {
    const keys = Object.keys(skus);

    const sizes = [];

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (skus[key].quantity > 0) {
        sizes.push([key, skus[key].size]);
      }
    }

    return sizes;
  };

  useEffect(() => {
    setCurrentSelectedId('default');
  }, [styleId]);

  const currentSizes = makeSizeTuples();
  return (
    <InnerContainer>
      <SelectorContainer>
        <SizeSelector currentSizes={currentSizes} handleSizeClick={handleSizeClick} />
        <QuantitySelector
          currentSelectedId={currentSelectedId}
          skus={skus}
          currentCount={currentCount}
          handleQuantityClick={handleQuantityClick}
        />
      </SelectorContainer>
      <NextRowContainer>
        <Bag
          currentSizes={currentSizes}
          currentSelectedId={currentSelectedId}
          setCurrentSelectedId={setCurrentSelectedId}
          currentCount={currentCount}
        />
      </NextRowContainer>
    </InnerContainer>
  );
};

AddToCart.propTypes = {
  skus: PropTypes.objectOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    }),
  ),
  styleId: PropTypes.number,
};

AddToCart.defaultProps = {
  skus: {},
  styleId: null,
};

export default AddToCart;
