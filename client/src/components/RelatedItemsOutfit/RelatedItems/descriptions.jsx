import React from 'react';
import PropTypes from 'prop-types';
import SalePrice from '../styledComponents/salePrice';

const Descriptions = ({ productInfo }) => (
  <div>
    <div>{productInfo.category}</div>
    <div>{productInfo.name}</div>
    <div>{productInfo.style}</div>
    <div>{productInfo.description}</div>
    {productInfo.default
      ? (
        <div>
          Default Price:
          {' '}
          {`$${productInfo.defaultPrice}`}
        </div>
      )
      : (
        <div>
          Sale:
          {' '}
          <SalePrice>
            {productInfo.salePrice ? `$${productInfo.salePrice}` : 'Sold Out'}
          </SalePrice>
          {' '}
          Original Price:
          {' '}
          <strike>
            {`$${productInfo.defaultPrice}`}
          </strike>
        </div>
      )}
    {/* <div>{productInfo.defaultPrice}</div>
    <div>{productInfo.salePrice}</div> */}
    <div>5 Stars review</div>
  </div>
);

export default Descriptions;

Descriptions.propTypes = {
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

Descriptions.defaultProps = {
  productInfo: null,
};
