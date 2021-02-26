/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RelatedItemsOutfit from './RelatedItemsOutfit/RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews/RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct('14931');
  }

  getProduct(id) {
    axios.get(`/products/${id}`)
      .then((response) => {
        this.setState(({
          product: response.data,
        }));
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
        <Overview product_id={product} getProduct={this.getProduct} />
        <RelatedItemsOutfit product_id={product} getProduct={this.getProduct} />
        <RatingsReviews product_id={product} getProduct={this.getProduct} />
      </div>
    );
  }
}

export default App;
