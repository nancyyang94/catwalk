import React from 'react';
import PropTypes from 'prop-types';
import SalePrice from '../styledComponents/salePrice';
import DescriptionsContainer from '../styledComponents/descriptionsContainer';

const Descriptions = ({ productInfo }) => (
  <DescriptionsContainer>
    <div>{productInfo.category}</div>
    <div><b>{productInfo.name}</b></div>
    <div>{productInfo.style}</div>
    <div>{productInfo.description}</div>
    {productInfo.default
      ? (
        <div>
          {`$${productInfo.defaultPrice}`}
        </div>
      )
      : (
        <div>
          <SalePrice>
            {productInfo.salePrice ? `$${productInfo.salePrice}` : 'Sold Out'}
          </SalePrice>
          {' '}
          <strike>
            {`$${productInfo.defaultPrice}`}
          </strike>
        </div>
      )}
    <div>5 Stars review</div>
  </DescriptionsContainer>
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
