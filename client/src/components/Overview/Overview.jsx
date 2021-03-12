import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageGallery from './ImageGallery/ImageGallery';
import OverviewContainer from './StyledComponents/OverviewContainer';
import GalleryContainer from './StyledComponents/GalleryContainer';
import AltWindowWidthContainer from './StyledComponents/AltWindowWidthContainer';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';
import AddToCartContainer from './StyledComponents/AddToCartContainer';
import DescriptionContainer from './StyledComponents/DescriptionContainer';
import ImageGalleryContainer from './StyledComponents/ImageGallery/ImageGalleryContainer';

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
        url: `/products/${currentId}/styles`,
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
    const { styles } = this.state;
    updateCurrentStyle(styles[0]);
  }

  render() {
    const { styles } = this.state;
    const { currentStyle, updateCurrentStyle, windowWidth } = this.props;

    if (styles.length < 1 || Object.keys(currentStyle).length === 0) {
      return (
        <ImageGalleryContainer
          isLoading={styles.length < 1 || Object.keys(currentStyle).length === 0}
        />
      );
    }
    const { photos, skus, style_id: styleId } = currentStyle;
    const { product, trackInteraction } = this.props;
    const { slogan, description } = product;

    return (
      <OverviewContainer
        onClick={(event) => trackInteraction(event, 'Overview')}
        onKeyPress={(event) => trackInteraction(event, 'Overview')}
        role="button"
        tabIndex={0}
        style={{ outline: 'none' }}
        windowWidth={windowWidth}
      >
        <GalleryContainer>
          <ImageGallery photos={photos} windowWidth={windowWidth} />
        </GalleryContainer>
        <AltWindowWidthContainer windowWidth={windowWidth}>
          <StyleSelector
            windowWidth={windowWidth}
            styles={styles}
            currentStyle={currentStyle}
            updateCurrentStyle={updateCurrentStyle}
          />
          <AddToCartContainer windowWidth={windowWidth}>
            <AddToCart styleId={styleId} skus={skus} />
          </AddToCartContainer>
        </AltWindowWidthContainer>
        <DescriptionContainer windowWidth={windowWidth}>
          <h1 className="overviewSlogan">{slogan.toUpperCase()}</h1>
          <h5 className="overviewDescription">{description}</h5>
        </DescriptionContainer>
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
  currentStyle: PropTypes.shape({
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
  trackInteraction: PropTypes.func,
};

Overview.defaultProps = {
  product: null,
  currentStyle: {},
  updateCurrentStyle: null,
  windowWidth: 0,
  trackInteraction: null,
};

export default Overview;
