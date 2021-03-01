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
        style_id: 1,
        name: 'Turquoise',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=962&amp;q=80',
          },
        ],
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
    this.state({
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
