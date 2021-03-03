import React from 'react';
import PropTypes from 'prop-types';
import StyleSelectorEntry from './StyleSelectorEntry';
import InnerContainer from '../StyledComponents/StyleSelector/InnerContainer';
import TextWrapper from '../StyledComponents/StyleSelector/TextWrapper';
import ListContainer from '../StyledComponents/StyleSelector/ListContainer';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { styles, currentStyle, updateCurrentStyle } = this.props;
    const { name: currentStyleName } = currentStyle;

    return (
      <InnerContainer>
        <TextWrapper>{`Style > ${currentStyleName}`}</TextWrapper>
        <ListContainer>
          {styles.map((style) => (
            <StyleSelectorEntry
              style={style}
              currentStyle={currentStyle}
              updateCurrentStyle={() => { updateCurrentStyle(style); }}
            />
          ))}
        </ListContainer>
      </InnerContainer>
    );
  }
}
StyleSelector.propTypes = {
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
  styles: PropTypes.PropTypes.arrayOf(PropTypes.object),
  updateCurrentStyle: PropTypes.func,
};

StyleSelector.defaultProps = {
  styles: {},
  currentStyle: {},
  updateCurrentStyle: null,
};

export default StyleSelector;
