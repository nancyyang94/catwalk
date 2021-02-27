import React from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <div>
          <img src={photos[0].url} alt="sweater" />
        </div>
        <div>
          <img src={photos[0].thumbnail_url} alt="sweater" />
        </div>
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

ImageGallery.defaultProps = {
  photos: null,
};
