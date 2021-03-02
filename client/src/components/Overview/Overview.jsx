import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from '../../../../config';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import OverviewContainer from './StyledComponents/OverviewContainer';
import GalleryContainer from './StyledComponents/GalleryContainer';
import InfoContainer from './StyledComponents/InfoContainer';

class Overview extends React.Component {
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
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${currentId}/styles`,
        headers: { Authorization: config.TOKEN },
      })
        .then((response) => {
          this.setState({
            styles: response.data.results,
          });
        })
        .then(() => {
          this.setDefaultStyle();
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  setDefaultStyle() {
    const { updateCurrentStyle } = this.props;
    const { currentStyle } = this.props;
    const { name: currentStyleName } = currentStyle;
    const { styles } = this.state;

    if (!currentStyleName) {
      for (let i = 0; i < styles.length; i += 1) {
        const style = styles[i];
        if (style['default?'] === true) {
          updateCurrentStyle(style);
          break;
        }
      }
    }
  }

  render() {
    const { styles } = this.state;
    const { currentStyle } = this.props;
    const { updateCurrentStyle } = this.props;
    const { product } = this.props;
    if (styles.length < 1) {
      return (<div>loading...</div>);
    }

    return (
      <OverviewContainer>
        <GalleryContainer>
          <ImageGallery currentStyle={currentStyle} />
        </GalleryContainer>
        <InfoContainer>
          <div>
            <ProductInfo product={product} styles={styles} currentStyle={currentStyle} />
          </div>
          <div>
            <StyleSelector
              styles={styles}
              currentStyle={currentStyle}
              updateCurrentStyle={updateCurrentStyle}
            />
          </div>
          <div>
            Add To Cart
          </div>
        </InfoContainer>
      </OverviewContainer>
    );
  }
}
Overview.propTypes = {
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
  }),
  updateCurrentStyle: PropTypes.func,
};

Overview.defaultProps = {
  product: null,
  currentStyle: {},
  updateCurrentStyle: null,
};

export default Overview;
