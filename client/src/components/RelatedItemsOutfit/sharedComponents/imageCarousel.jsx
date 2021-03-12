import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Left from '../styledComponents/styledRelated/left';
// import Right from '../styledComponents/styledRelated/right';

const ImageCarousel = ({ photos, setPhoto }) => {
  const [thumbnails] = useState(photos);
  const placeHolder = 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';

  return (
    <div className="imageButtonContainer">
      <button type="button" className="imageLeft" aria-label="scroll left"><svg height="60" width="60" className="imageLeftSVG"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></svg></button>
      <div className="carouselContainer">
        {thumbnails.map((thumbnail) => (
          <div className="thumbnailContainer" key={thumbnail.thumbnail_url} onClick={(event) => { setPhoto(event, thumbnail.thumbnail_url ? thumbnail.thumbnail_url : placeHolder); }} role="button" tabIndex={0} onKeyPress={() => { }}><img className="thumbnail" src={thumbnail.thumbnail_url ? thumbnail.thumbnail_url : placeHolder} alt="More Images" /></div>
        ))}
      </div>
      <button type="button" className="imageRight" aria-label="scroll right"><svg height="60" width="60" className="imageRightSVG"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></svg></button>
    </div>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  setPhoto: PropTypes.func,
};

ImageCarousel.defaultProps = {
  photos: null,
  setPhoto: PropTypes.func,
};
