import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItems/relatedItemsList';

class RelatedItemsOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      // i need to get all the styles of the related items....
    };
    // this.getRelated = this.getRelated.bind(this);
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
        });
      });
  }

  render() {
    const { related } = this.state;
    return (
      <div>
        {/* <button>LEFT</button> */}
        <RelatedItemsList related={related} />
        {/* <button>Right</button> */}
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
};

RelatedItemsOutfit.defaultProps = {
  product: null,
};
