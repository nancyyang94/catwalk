import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import ImageGalleryContainer from '../StyledComponents/ImageGallery/ImageGalleryContainer';
import GalleryViewerImg from '../StyledComponents/ImageGallery/GalleryViewerImg';
import NextButtonR from '../StyledComponents/ImageGallery/NextButtonR';
import NextButtonL from '../StyledComponents/ImageGallery/NextButtonL';
import ExpandButton from '../StyledComponents/ImageGallery/ExpandButton';

const ImageGallery = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const mouseEnter = () => {
    setIsHovering(true);
  };

  const mouseLeave = () => {
    setIsHovering(false);
  };

  const nextSlide = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClick = (num) => {
    setCurrent(num);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }
  return (
    <ImageGalleryContainer isExpanded={isExpanded} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <ExpandButton onClick={handleExpand}>
        <img src="https://img.icons8.com/small/32/000000/full-screen.png" alt="fullscreen" />
      </ExpandButton>
      <NextButtonL onClick={prevSlide}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      </NextButtonL>
      <NextButtonR onClick={nextSlide}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </NextButtonR>
      {photos.map((photoObj, index) => {
        const { url } = photoObj;
        const key = index;
        if (index === current) {
          return (
            <GalleryViewerImg key={key} src={url} alt="active img" />
          );
        }
        return null;
      })}
      <Nav current={current} photos={photos} handleClick={handleClick} isHovering={isHovering} />
    </ImageGalleryContainer>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

ImageGallery.defaultProps = {
  photos: [],
};

export default ImageGallery;
