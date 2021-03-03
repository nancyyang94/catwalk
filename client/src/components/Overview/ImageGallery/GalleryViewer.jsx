import React from 'react';
import PropTypes from 'prop-types';
import GalleryViewerImg from '../StyledComponents/ImageGallery/GalleryViewerImg';
import ViewerContainer from '../StyledComponents/ImageGallery/ViewerContainer';

class GalleryViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { clicked: url } = this.props;
    return (
      <ViewerContainer>
        <GalleryViewerImg src={url} alt="clicked img" />
      </ViewerContainer>
    );
  }
}

GalleryViewer.propTypes = {
  clicked: PropTypes.string,
};

GalleryViewer.defaultProps = {
  clicked: '',
};

export default GalleryViewer;
