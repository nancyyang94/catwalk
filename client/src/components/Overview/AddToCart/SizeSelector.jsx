import React from 'react';
import PropTypes from 'prop-types';
import SizeSelectorContainer from '../StyledComponents/AddToCart/SizeSelectorContainer';

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
      <option value="default" key="default">Select Size</option>
      {currentSizes.map((tuple) => {
        const skuId = tuple[0];
        const size = tuple[1];
        return (
          <option value={skuId} key={skuId}>{size}</option>
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
