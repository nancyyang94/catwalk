/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Overview from './Overview/Overview';
import RelatedItemsOutfit from './RelatedItemsOutfit/RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews/RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentStyle: {},
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
      <Router>
        <Route
          path="/"
          exact
          strict
          render={
          () => (
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
          )
        }
        />
        <Route
          path="/product/:product_id"
          exact
          strict
          render={
          () => (
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
          )
        }
        />
      </Router>
    );
  }
}

export default App;
