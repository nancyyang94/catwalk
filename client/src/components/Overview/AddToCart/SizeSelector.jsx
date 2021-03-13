import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SizeSelectorContainer from '../StyledComponents/AddToCart/SizeSelectorContainer';
import SizeOption from '../StyledComponents/AddToCart/SizeOption';

const SizeSelector = ({ currentSizes, handleSizeClick, flagged }) => {
  const [currentValue, setCurrentValue] = useState('default');

  if (currentSizes.length === 0) {
    return (
      <SizeSelectorContainer defaultValue="default" disabled={currentSizes.length === 0}>
        <option value="default">OUT OF STOCK</option>
      </SizeSelectorContainer>
    );
  }
  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    handleSizeClick(currentValue);
  }, [currentValue]);

  return (
    <SizeSelectorContainer value={currentValue} onChange={handleChange} flagged={flagged}>
      <SizeOption value="default" key="default">Select Size</SizeOption>
      {currentSizes.map((tuple) => {
        const skuId = tuple[0];
        const size = tuple[1];
        return (
          <SizeOption value={skuId} key={skuId}>{size}</SizeOption>
        );
      })}
    </SizeSelectorContainer>
  );
};

SizeSelector.propTypes = {
  currentSizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  handleSizeClick: PropTypes.func,
  flagged: PropTypes.bool,
};

SizeSelector.defaultProps = {
  currentSizes: [],
  handleSizeClick: null,
  flagged: false,
};

export default SizeSelector;
