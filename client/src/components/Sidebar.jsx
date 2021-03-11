import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductInfo from './Overview/ProductInfo/ProductInfo';
import StyleSelector from './Overview/StyleSelector/StyleSelector';
import AddToCart from './Overview/AddToCart/AddToCart';
import InfoContainer from './Overview/StyledComponents/InfoContainer';
import AddToCartContainer from './Overview/StyledComponents/AddToCartContainer';
import ProductInfoContainer from './Overview/StyledComponents/ProductInfoContainer';
import Features from './Overview/Features';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { product: prevProduct } = prevProps;
    const { id: prevId } = prevProduct;
    const { product: currentProduct } = this.props;
    const { id: currentId } = currentProduct;

    if (prevId !== currentId) {
      axios({
        method: 'GET',
        url: `/products/${currentId}/styles`,
      })
        .then((response) => {
          this.setState({
            styles: response.data.results,
          });
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  render() {
    const { styles } = this.state;
    const {
      currentStyle, updateCurrentStyle, product, windowWidth,
    } = this.props;

    if (styles.length < 1 || Object.keys(currentStyle).length === 0) {
      return <InfoContainer windowWidth={windowWidth} />;
    }
    const { skus, style_id: styleId } = currentStyle;
    const { features } = product;

    return (
      <InfoContainer windowWidth={windowWidth}>
        <ProductInfoContainer>
          <ProductInfo product={product} styles={styles} currentStyle={currentStyle} />
        </ProductInfoContainer>
        <StyleSelector
          styles={styles}
          currentStyle={currentStyle}
          updateCurrentStyle={updateCurrentStyle}
        />
        <AddToCartContainer>
          <AddToCart styleId={styleId} skus={skus} />
        </AddToCartContainer>
        <Features features={features} />
      </InfoContainer>
    );
  }
}
Sidebar.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      }),
    ),
  }),
  updateCurrentStyle: PropTypes.func,
  windowWidth: PropTypes.number,
};

Sidebar.defaultProps = {
  product: null,
  currentStyle: {},
  updateCurrentStyle: null,
  windowWidth: 0,
};

export default Sidebar;
