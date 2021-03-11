import React from 'react';
import PropTypes from 'prop-types';
import StyleSelectorEntry from './StyleSelectorEntry';
import InnerContainer from '../StyledComponents/StyleSelector/InnerContainer';
import TextWrapper from '../StyledComponents/StyleSelector/TextWrapper';
import ListContainer from '../StyledComponents/StyleSelector/ListContainer';
import StylePointerText from '../StyledComponents/StyleSelector/StylePointerText';
import CurrentStyleText from '../StyledComponents/StyleSelector/CurrentStyleText';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      styles, currentStyle, updateCurrentStyle, windowWidth,
    } = this.props;
    const { name: currentStyleName, style_id: selectedId } = currentStyle;

    return (
      <InnerContainer windowWidth={windowWidth}>
        <TextWrapper windowWidth={windowWidth}>
          <StylePointerText>{'STYLE >'}</StylePointerText>
          <CurrentStyleText>{currentStyleName.toUpperCase()}</CurrentStyleText>
        </TextWrapper>
        <ListContainer>
          {styles.map((style) => {
            const { style_id: styleId } = style;

            return (
              <StyleSelectorEntry
                key={Math.random()}
                style={style}
                styleId={styleId}
                selectedId={selectedId}
                updateCurrentStyle={() => { updateCurrentStyle(style); }}
              />
            );
          })}
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
  windowWidth: PropTypes.number,
};

StyleSelector.defaultProps = {
  styles: {},
  currentStyle: {},
  updateCurrentStyle: null,
  windowWidth: 0,
};

export default StyleSelector;
