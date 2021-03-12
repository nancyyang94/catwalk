import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Left from '../styledComponents/styledRelated/left';
// import Right from '../styledComponents/styledRelated/right';

const ImageCarousel = ({ photos, setPhoto, id, trackInteraction }) => {
  const [thumbnails] = useState(photos);
  const placeHolder = 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
  const [hasPreviousPhotos, sethasPreviousPhotos] = useState(false);
  const [hasNextPhotos, sethasNextPhotos] = useState(false);
  let unique;
  if (id) {
    unique = id;
  }

  const updateButton = () => {
    const thumbnailsSlider = document.getElementById(`${unique}`);
    if (thumbnailsSlider) {
      const thumbnailsWiidth = thumbnailsSlider.scrollWidth - thumbnailsSlider.clientWidth;
      if (thumbnailsWiidth && thumbnailsSlider.scrollLeft !== thumbnailsWiidth) {
        sethasNextPhotos(true);
      }
      if (thumbnailsSlider.scrollLeft === 0) {
        sethasPreviousPhotos(false);
      } else {
        sethasPreviousPhotos(true);
      }
    } else {
      sethasNextPhotos(false);
      if (thumbnailsSlider.scrollLeft === 0) {
        sethasPreviousPhotos(false);
      } else {
        sethasPreviousPhotos(true);
      }
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      updateButton();
    }
  }, [id]);

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', updateButton);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', updateButton);
    };
  }, []);

  const left = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const thumbnailsSlider = document.getElementById(`${unique}`);
    trackInteraction(event, 'RelatedOutfit');
    thumbnailsSlider.scrollLeft -= 48;
    if (thumbnailsSlider.scrollLeft < 96) {
      thumbnailsSlider.scrollLeft = 0;
      sethasNextPhotos(true);
      sethasPreviousPhotos(false);
      return null;
    }
    sethasNextPhotos(true);
    return null;
  };

  const right = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const thumbnailsSlider = document.getElementById(`${unique}`);
    trackInteraction(event, 'RelatedOutfit');
    thumbnailsSlider.scrollLeft += 48;
    if (
      thumbnailsSlider.scrollLeft > thumbnailsSlider.scrollWidth - thumbnailsSlider.clientWidth - 96
    ) {
      thumbnailsSlider.scrollLeft = thumbnailsSlider.scrollWidth;
      sethasNextPhotos(false);
      sethasPreviousPhotos(true);
      return null;
    }
    sethasPreviousPhotos(true);
    return null;
  };

  return (
    <div className="imageButtonContainer">
      {hasPreviousPhotos ? <button type="button" className="imageLeft" aria-label="scroll left" onClick={(event) => left(event)}><svg height="60" width="60" className="imageLeftSVG"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></svg></button> : null }
      <div id={`${unique}`} className="carouselContainer">
        {thumbnails.map((thumbnail) => (
          <div className="thumbnailContainer" key={thumbnail.thumbnail_url} onClick={(event) => { setPhoto(event, thumbnail.thumbnail_url ? thumbnail.thumbnail_url : placeHolder); }} role="button" tabIndex={0} onKeyPress={() => {}}><img className="thumbnail" src={thumbnail.thumbnail_url ? thumbnail.thumbnail_url : placeHolder} alt="More Images" /></div>
        ))}
      </div>
      {hasNextPhotos ? <button type="button" className="imageRight" aria-label="scroll right" onClick={(event) => right(event)}><svg height="60" width="60" className="imageRightSVG"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></svg></button> : null }
    </div>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  setPhoto: PropTypes.func,
  id: PropTypes.number,
  trackInteraction: PropTypes.func,
};

ImageCarousel.defaultProps = {
  photos: null,
  setPhoto: PropTypes.func,
  id: PropTypes.number,
  trackInteraction: PropTypes.func,
};
