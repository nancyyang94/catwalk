import React from 'react';
import PropTypes from 'prop-types';
import GalleryList from './GalleryList';
import GalleryViewer from './GalleryViewer';
import ImageGalleryContainer from '../StyledComponents/ImageGallery/ImageGalleryContainer';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 'src',
    };

    this.imgClickHandler = this.imgClickHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentStyle: prevStyle } = prevProps;
    const { style_id: prevId } = prevStyle;
    const { currentStyle } = this.props;
    const { style_id: currentId } = currentStyle;
    if (currentId !== prevId && currentId) {
      const { photos } = currentStyle;
      const defaultPhotoObj = photos[0];
      const { url: defaultUrl } = defaultPhotoObj;
      this.setState({
        clicked: defaultUrl,
      });
    }
  }

  imgClickHandler(e) {
    this.setState({
      clicked: e.target.getAttribute('src'),
    });
  }

  render() {
    const { currentStyle } = this.props;
    const { photos } = currentStyle;
    const { clicked } = this.state;
    return (
      <ImageGalleryContainer>
        <GalleryList photos={photos} imgClickHandler={this.imgClickHandler} />
        <GalleryViewer clicked={clicked} />
      </ImageGalleryContainer>
    );
  }
}
ImageGallery.propTypes = {
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
};

ImageGallery.defaultProps = {
  currentStyle: {},
};

export default ImageGallery;
