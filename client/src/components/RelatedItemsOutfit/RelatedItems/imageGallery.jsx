import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../styledComponents/styledRelated/imageContainer';
import Image from '../styledComponents/styledRelated/image';
import ImageCarousel from '../sharedComponents/imageCarousel';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    const { photos } = this.props;
    this.state = {
      imageFocus: false,
      photo: photos[0].url ? photos[0].url : 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
    };
    this.focusOn = this.focusOn.bind(this);
    this.focusOff = this.focusOff.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
  }

  setPhoto(event, photo) {
    event.stopPropagation();
    event.preventDefault();
    const { trackInteraction } = this.props;
    trackInteraction(event, 'RelatedOutfit');
    this.setState({
      photo,
    });
    event.stopPropagation();
  }

  focusOn(event) {
    event.stopPropagation();
    this.setState({
      imageFocus: true,
    });
  }

  focusOff(event) {
    event.stopPropagation();
    this.setState({
      imageFocus: false,
    });
  }

  render() {
    const { imageFocus, photo } = this.state;
    const {
      photos, category, trackInteraction, productId,
    } = this.props;
    return (
      <ImageContainer
        onMouseEnter={(event) => { this.focusOn(event); }}
        onMouseLeave={(event) => { this.focusOff(event); }}
      >
        <Image src={photo} alt={category} />
        { imageFocus ? (
          <ImageCarousel
            photos={photos}
            setPhoto={this.setPhoto}
            trackInteraction={trackInteraction}
            id={productId}
          />
        ) : null }
      </ImageContainer>
    );
  }
}
ImageGallery.displayName = 'imageGallery';
export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
  trackInteraction: PropTypes.func,
  productId: PropTypes.number,
};

ImageGallery.defaultProps = {
  photos: null,
  category: PropTypes.string,
  trackInteraction: PropTypes.func,
  productId: null,
};
