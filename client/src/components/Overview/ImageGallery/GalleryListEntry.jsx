import React from 'react';
import PropTypes from 'prop-types';
import GalleryListEntryImg from '../StyledComponents/ImageGallery/GalleryListEntryImg';

const GalleryListEntry = (props) => {
  const { url, imgClickHandler } = props;

  return (
    <GalleryListEntryImg src={url} alt="full size style" onClick={imgClickHandler} />
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
