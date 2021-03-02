import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../styledComponents/styledRelated/imageContainer';
import Image from '../styledComponents/styledRelated/image';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photos, category } = this.props;
    return (
      <ImageContainer>
        <Image src={photos[0].url} alt={category} />
      </ImageContainer>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
};

ImageGallery.defaultProps = {
  photos: null,
  category: PropTypes.string,
};
