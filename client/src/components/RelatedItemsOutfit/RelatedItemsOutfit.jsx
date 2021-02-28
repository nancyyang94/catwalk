import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItems/relatedItemsList';

class RelatedItemsOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      shifted: [],
      isPrevious: false,
      isNext: true,
    };
    // this.getRelated = this.getRelated.bind(this);
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { product } = this.props;
    if (product !== prevProps.product) {
      this.getRelated(product.id);
    }
    // if (prevState.input !== this.state.input) {

    // }
  }

  getRelated(id) {
    axios.get(`/products/${id}/related`)
      .then((response) => {
        this.setState({
          related: response.data,
          isPrevious: false,
          isNext: true,
          shifted: [],
        });
      });
  }

  right() {
    const {
      related, shifted,
    } = this.state;
    if (related.length > 5) {
      const copy = related.slice();
      const shift = copy.shift();
      this.setState({
        related: copy,
        shifted: shifted.concat(shift),
        isPrevious: true,
      });
      if (related.length === 6) {
        this.setState({
          isNext: false,
        });
      }
    }
  }

  left() {
    const {
      related, shifted,
    } = this.state;
    if (shifted.length) {
      const copy = related.slice();
      const copyShifted = shifted.slice();
      const popped = copyShifted.pop();
      copy.unshift(popped);
      this.setState({
        related: copy,
        shifted: copyShifted,
        isNext: true,
      });
      if (copyShifted.length === 0) {
        this.setState({
          isPrevious: false,
        });
      }
    }
  }

  render() {
    const { related, isPrevious, isNext } = this.state;
    const { getProduct, product } = this.props;
    return (
      <div>
        Related List
        {isPrevious ? <button type="button" onClick={this.left}>LEFT</button> : null}
        <RelatedItemsList
          related={related}
          getProduct={getProduct}
          mainFeatures={product.features}
          mainName={product.name}
        />
        {isNext ? <button type="button" onClick={this.right}>Right</button> : null}
      </div>
    );
  }
}

export default RelatedItemsOutfit;

RelatedItemsOutfit.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
  getProduct: PropTypes.func,
};

RelatedItemsOutfit.defaultProps = {
  product: null,
  getProduct: PropTypes.func,
};
