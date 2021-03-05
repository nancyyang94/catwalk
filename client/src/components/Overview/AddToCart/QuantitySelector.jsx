import React from 'react';
import PropTypes from 'prop-types';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   const { currentStyle: prevStyle } = prevProps;
  //   const { style_id: prevId } = prevStyle;
  //   const { currentStyle, selectedSkuId} = this.props;
  //   const { style_id: currentId } = currentStyle;

  //   if (prevId !== currentId && currentId) {
  //     const { skus } = currentStyle;
  //     const currentSkuObj = skus[selectedSkuId];

  //     this.setState({
  //       currentSkuObj: currentSkuObj,

  //     });
  //   }
  // }

  handleChange(e) {
    const { setCount } = this.props;
    setCount(e.target.value);
  }

  renderSwitch() {
    const { currentStyle, selectedSkuId } = this.props;
    const { skus } = currentStyle;
    const currentSkuObj = skus[selectedSkuId];
    const { quantity } = currentSkuObj;
    const quantityArr = [];

    for (let i = 1; i < quantity + 1; i += 1) {
      if (i > 15) {
        break;
      }

      quantityArr.push(i);
    }

    return quantityArr.map((num, index) => {
      const key = index;
      return (
        <option key={key} value={num}>{num}</option>
      );
    });
  }

  render() {
    const { selectedSkuId } = this.props;
    if (selectedSkuId === 'default') {
      return (
        <select defaultValue="default" disabled={selectedSkuId === 'default'}>
          <option value="default">-</option>
        </select>
      );
    }

    return (
      <select defaultValue="1" onChange={this.handleChange}>
        {this.renderSwitch()}
      </select>
    );
  }
}

QuantitySelector.propTypes = {
  currentStyle: PropTypes.shape({ // left skus and default? out for now
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      }),
    ),
  }),
  setCount: PropTypes.func,
  selectedSkuId: PropTypes.string,
};

QuantitySelector.defaultProps = {
  currentStyle: {},
  setCount: null,
  selectedSkuId: 'default',
};

export default QuantitySelector;
