import React from 'react';
import PropTypes from 'prop-types';
import SizeSelectorContainer from '../StyledComponents/AddToCart/SizeSelectorContainer';
import SizeOption from '../StyledComponents/AddToCart/SizeOption';

const SizeSelector = ({ currentSelectedId, currentSizes, handleSizeClick }) => {
  if (currentSizes.length === 0) {
    return (
      <SizeSelectorContainer defaultValue="default" disabled={currentSizes.length === 0}>
        <option value="default">OUT OF STOCK</option>
      </SizeSelectorContainer>
    );
  }
  const handleChange = (e) => {
    handleSizeClick(e.target.value);
  };

  return (
    <SizeSelectorContainer value={currentSelectedId} onChange={handleChange}>
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
  currentSelectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

SizeSelector.defaultProps = {
  currentSizes: [],
  handleSizeClick: null,
  currentSelectedId: 'default',
};

export default SizeSelector;
