import React from 'react';
import PropTypes from 'prop-types';

class GalleryViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { clicked: url } = this.props;
    return (
      <div>
        <img src={url} alt="clicked img" />
      </div>
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
