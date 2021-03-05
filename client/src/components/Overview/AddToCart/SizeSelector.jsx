import React from 'react';
import PropTypes from 'prop-types';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableSkus: [],
      skusObj: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentStyle: prevStyle } = prevProps;
    const { style_id: prevId } = prevStyle;
    const { currentStyle } = this.props;
    const { style_id: currentId } = currentStyle;

    if (prevId !== currentId && currentId) {
      const { skus } = currentStyle;
      const inStock = [];
      const keys = Object.keys(skus);

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        if (skus[key].quantity > 0) {
          inStock.push(key);
        }
      }

      this.setState({
        availableSkus: inStock,
        skusObj: skus,
      });
    }
  }

  handleChange(e) {
    const { setSelectedSkuId } = this.props;
    setSelectedSkuId(e.target.value);
  }

  renderSwitch() {
    const { availableSkus, skusObj } = this.state;

    return availableSkus.map((property, index) => {
      const sku = skusObj[property];
      const { size } = sku;
      const key = index;
      return (<option key={key} value={property}>{size}</option>);
    });
  }

  render() {
    const { availableSkus } = this.state;
    if (availableSkus.length < 1) {
      return (
        <div>OUT OF STOCK</div>
      );
    }

    return (
      <select onChange={this.handleChange} defaultValue="default">
        <option value="default">Select Size</option>
        {this.renderSwitch()}
      </select>
    );
  }
}

SizeSelector.propTypes = {
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
  setSelectedSkuId: PropTypes.func,
};

SizeSelector.defaultProps = {
  currentStyle: {},
  setSelectedSkuId: null,
};

export default SizeSelector;
