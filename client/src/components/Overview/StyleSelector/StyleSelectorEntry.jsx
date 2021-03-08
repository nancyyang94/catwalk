import React from 'react';
import PropTypes from 'prop-types';
import StyleImg from '../StyledComponents/StyleSelector/StyleImg';
import ImgContainer from '../StyledComponents/StyleSelector/ImgContainer';
import CheckmarkContainer from '../StyledComponents/StyleSelector/CheckmarkContainer';

const StyleSelectorEntry = ({
  style, updateCurrentStyle, styleId, selectedId,
}) => {
  const { photos } = style;
  const photoObj = photos[0];
  const { thumbnail_url: thumbnail } = photoObj;

  if (styleId === selectedId) {
    return (
      <ImgContainer>
        <CheckmarkContainer>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
          </svg>
        </CheckmarkContainer>
        <StyleImg src={`${thumbnail}`} alt="style_thumbnail" onClick={updateCurrentStyle} />
      </ImgContainer>
    );
  }

  return (
    <ImgContainer>
      <StyleImg src={`${thumbnail}`} alt="style_thumbnail" onClick={updateCurrentStyle} />
    </ImgContainer>
  );
};

StyleSelectorEntry.propTypes = {
  styleId: PropTypes.number,
  selectedId: PropTypes.number,
  style: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
  updateCurrentStyle: PropTypes.func,
};

StyleSelectorEntry.defaultProps = {
  style: {},
  styleId: null,
  selectedId: null,
  updateCurrentStyle: null,
};

export default StyleSelectorEntry;
