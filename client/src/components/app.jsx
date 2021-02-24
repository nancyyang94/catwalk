import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import RelatedItemsOutfit from './RelatedItemsOutfit.jsx';
import RatingsReviews from './RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        Product Page
        <ProductDetail/>
        <RelatedItemsOutfit/>
        <RatingsReviews/>
      </div>
    )
  }
}

export default App;
