import React from 'react';
import PropTypes from 'prop-types';
import StyleImg from '../StyledComponents/StyleSelector/StyleImg';
import ImgContainer from '../StyledComponents/StyleSelector/ImgContainer';

class StyleSelectorEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { currentStyle, style } = this.props;
    const { style_id: currentStyleId } = currentStyle;
    const { style_id: styleId } = style;

    if (currentStyleId === styleId) {
      this.setState({
        selected: true,
      });
    }
  }

  render() {
    const { style, updateCurrentStyle } = this.props;
    const { photos } = style;
    const photoObj = photos[0];
    const { thumbnail_url: thumbnail } = photoObj;
    return (
      <ImgContainer>
        <StyleImg src={`${thumbnail}`} alt="style_thumbnail" onClick={updateCurrentStyle} />
      </ImgContainer>
    );
  }
}
StyleSelectorEntry.propTypes = {
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
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
  currentStyle: {},
  updateCurrentStyle: null,
};

export default StyleSelectorEntry;
