/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import RelatedItemsOutfit from './RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/products/14931')
      .then((response) => {
        console.log(response.data);
        this.setState({
          product: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        Product Page
        <ProductDetail product_id={product} />
        <RelatedItemsOutfit product_id={product} />
        <RatingsReviews product_id={product} />
      </div>
    );
  }
}

export default App;
