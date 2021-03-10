import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../styledComponents/styledRelated/imageContainer';
import Image from '../styledComponents/styledRelated/image';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFocus: false,
    };
    this.focusOn = this.focusOn.bind(this);
    this.focusOff = this.focusOff.bind(this);
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
    const { imageFocus } = this.state;
    const { photos, category } = this.props;
    return (
      <ImageContainer onMouseEnter={(event) => { this.focusOn(event); }} onMouseLeave={(event) => { this.focusOff(event); }} className={imageFocus ? 'action' : ''}>
        <Image src={photos[0].url ? photos[0].url : 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'} alt={category} />
      </ImageContainer>
    );
  }
}
ImageGallery.displayName = 'imageGallery';
export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
};

ImageGallery.defaultProps = {
  photos: null,
  category: PropTypes.string,
};
