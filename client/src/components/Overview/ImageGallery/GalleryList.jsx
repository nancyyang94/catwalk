import React from 'react';
import PropTypes from 'prop-types';
import GalleryListEntry from './GalleryListEntry';

const GalleryList = (props) => {
  const { photos, imgClickHandler } = props;
  return (
    <div>
      {photos.map((photo) => {
        const { url } = photo;
        return (
          <GalleryListEntry url={url} imgClickHandler={imgClickHandler} />
        );
      })}
    </div>
  );
};

GalleryList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  imgClickHandler: PropTypes.func,
};

GalleryList.defaultProps = {
  photos: [],
  imgClickHandler: null,
};

export default GalleryList;
