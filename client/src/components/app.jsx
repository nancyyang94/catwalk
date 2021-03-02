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
      currentStyle: {
        // style name
        // default price
        // default is true or false
        // sale price
        // style id
        // photos
      },
    };
    this.getProduct = this.getProduct.bind(this);
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  componentDidMount() {
    this.getProduct('14931');
  }

  getProduct(id) {
    axios.get(`/products/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState(({
          product: response.data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentStyle(styleInfo) {
    this.setState({
      currentStyle: styleInfo,
    });
  }

  render() {
    const { product, currentStyle } = this.state;
    return (
      <div>
        Product Page
        <Overview
          product={product}
          currentStyle={currentStyle}
          getProduct={this.getProduct}
          updateCurrentStyle={this.updateCurrentStyle}
        />
        <RelatedItemsOutfit
          product={product}
          getProduct={this.getProduct}
          currentStyle={currentStyle}
        />
        <RatingsReviews product={product} getProduct={this.getProduct} />
      </div>
    );
  }
}

export default App;
