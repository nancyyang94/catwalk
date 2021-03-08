import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BagContainer from '../StyledComponents/AddToCart/BagContainer';

const Bag = ({ currentSelectedId, currentSizes }) => {
  if (currentSizes.length === 0) {
    return null;
  }

  const handleClick = () => {
    if (currentSelectedId === 'default') {
      // eslint-disable-next-line no-console
      console.log('u gotta add a size!');
    } else {
      const styleNumber = Number(currentSelectedId);
      axios.post('/cart', { styleNumber })
        // .then((response) => {
        //   setCurrentSelectedId('default');
        // })
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
    <BagContainer onClick={handleClick}>
      Add To Bag
    </BagContainer>
  );
};

Bag.propTypes = {
  currentSizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  currentSelectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Bag.defaultProps = {
  currentSizes: [],
  currentSelectedId: 'default',
};

export default Bag;
