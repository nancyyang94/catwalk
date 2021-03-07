import React from 'react';
import PropTypes from 'prop-types';
import QuantitySelectorContainer from '../StyledComponents/AddToCart/QuantitySelectorContainer';

const QuantitySelector = ({ currentSelectedId, skus, handleQuantityClick }) => {
  if (currentSelectedId === 'default' || !skus[currentSelectedId]) {
    return (
      <QuantitySelectorContainer defaultValue="default" disabled={currentSelectedId === 'default'}>
        <option value="default">-</option>
      </QuantitySelectorContainer>
    );
  }

  const handleChange = (e) => {
    handleQuantityClick(e.target.value);
  };
  const makeQuantityArray = () => {
    const max = skus[currentSelectedId].quantity;
    const quantityArr = [];

    for (let i = 1; i < max + 1; i += 1) {
      if (i > 15) {
        break;
      }

      quantityArr.push(i);
    }

    return quantityArr;
  };

  const options = makeQuantityArray();

  return (
    <QuantitySelectorContainer onChange={handleChange}>
      {options.map((num) => (
        <option value={num} key={num}>{num}</option>
      ))}
    </QuantitySelectorContainer>
  );
};

QuantitySelector.propTypes = {
  skus: PropTypes.objectOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    }),
  ),
  currentSelectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleQuantityClick: PropTypes.func,
};

QuantitySelector.defaultProps = {
  skus: {},
  currentSelectedId: null,
  handleQuantityClick: null,
};

export default QuantitySelector;
