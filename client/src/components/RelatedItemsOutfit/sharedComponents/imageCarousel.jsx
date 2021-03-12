import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({ trackInteraction, photos }) => {
  const [thumbnails] = useState(photos);

  return (
    <div className="carouselContainer">
      {thumbnails.map((thumbnail) => (
        <div className="thumbnailContainer" key={thumbnail.thumbnail_url}><img className="thumbnail" src={thumbnail.thumbnail_url ? thumbnail.thumbnail_url : 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} alt="More Images" /></div>
      ))}
    </div>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  trackInteraction: PropTypes.func,
};

ImageCarousel.defaultProps = {
  photos: null,
  trackInteraction: PropTypes.func,
};
