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
      <svg className="bagSvg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
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
