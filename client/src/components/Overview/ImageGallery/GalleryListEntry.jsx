import React from 'react';
import PropTypes from 'prop-types';
import GalleryListEntryContainer from '../StyledComponents/ImageGallery/GalleryListEntryContainer';

const GalleryListEntry = (props) => {
  const { url, imgClickHandler } = props;
  const myStyle = {
    height: 'auto',
    width: '100px',
  };

  return (
    <GalleryListEntryContainer onClick={imgClickHandler}>
      <img src={url} alt="full size style" style={myStyle} />
    </GalleryListEntryContainer>
  );
};

GalleryListEntry.propTypes = {
  url: PropTypes.string,
  imgClickHandler: PropTypes.func,
};

GalleryListEntry.defaultProps = {
  url: '',
  imgClickHandler: null,
};

export default GalleryListEntry;
