import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavButton from '../StyledComponents/ImageGallery/NavButton';
import NavThumbnail from '../StyledComponents/ImageGallery/NavThumbnail';
import NavContainer from '../StyledComponents/ImageGallery/NavContainer';

const Nav = ({ current, photos, isHovering, handleClick }) => (
  <NavContainer>
    {photos.map((photoObj, index) => {
      const { thumbnail_url: thumbnail } = photoObj;
      const key = index;

      return (
        <NavButton
          current={current}
          index={index}
          active={isHovering}
          onClick={() => handleClick(index)}
          key={key}
        >
          <NavThumbnail active={isHovering} src={thumbnail} alt="nav thumbnail" />
        </NavButton>
      );
    })}
  </NavContainer>
);

Nav.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
  isHovering: PropTypes.bool,
};

Nav.defaultProps = {
  photos: [],
  handleClick: null,
  isHovering: false,
};

export default Nav;
