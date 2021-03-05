import React from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkuId: 'default',
      count: 1,
    };

    this.setSelectedSkuId = this.setSelectedSkuId.bind(this);
    this.setCount = this.setCount.bind(this);
  }

  setSelectedSkuId(key) {
    this.setState({
      selectedSkuId: key,
    });
  }

  setCount(quantity) {
    this.setState({
      count: quantity,
    });
  }

  render() {
    const { currentStyle } = this.props;
    const { selectedSkuId, count } = this.state;
    console.log('count: ' + count);
    return (
      <div>
        <SizeSelector setSelectedSkuId={this.setSelectedSkuId} currentStyle={currentStyle} />
        <QuantitySelector
          currentStyle={currentStyle}
          selectedSkuId={selectedSkuId}
          setCount={this.setCount}
        />
      </div>
    );
  }
}

AddToCart.propTypes = {
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
};

AddToCart.defaultProps = {
  currentStyle: {},
};

export default AddToCart;
