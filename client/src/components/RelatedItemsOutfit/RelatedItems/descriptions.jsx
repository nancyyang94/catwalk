import React from 'react';
import PropTypes from 'prop-types';
import SalePrice from '../styledComponents/styledRelated/salePrice';
import DescriptionsContainer from '../styledComponents/styledRelated/descriptionsContainer';
import StarReviews from '../sharedComponents/starReviews';

const Descriptions = ({ productInfo }) => (
  <DescriptionsContainer>
    <div className="category">{productInfo.category}</div>
    <div className="name">{productInfo.name.toUpperCase()}</div>
    <div className="style">{productInfo.style.toUpperCase()}</div>
    {/* <div>{productInfo.slogan}</div> */}
    {productInfo.default
      ? (
        <div className="default">
          {`$${productInfo.defaultPrice}`}
        </div>
      )
      : (
        <div className="salePrice">
          <SalePrice>
            {productInfo.salePrice ? `$${productInfo.salePrice}` : 'Sold Out'}
          </SalePrice>
          {' '}
          <strike>
            {`$${productInfo.defaultPrice}`}
          </strike>
        </div>
      )}
    <StarReviews reviews={productInfo.reviews} />
  </DescriptionsContainer>
);

Descriptions.displayName = 'descriptions';
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
    reviews: PropTypes.arrayOf(PropTypes.object),
  }),
};

Descriptions.defaultProps = {
  productInfo: null,
};
