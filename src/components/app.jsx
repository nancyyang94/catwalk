import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import RelatedItemsOutfit from './RelatedItemsOutfit.jsx';


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
        <RatingsReviews/>
        <RelatedItemsOutfit/>
      </div>
    )
  }
}

export default App;
