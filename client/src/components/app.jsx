import React from 'react';
import ProductDetail from './ProductDetail';
import RelatedItemsOutfit from './RelatedItemsOutfit';
import RatingsReviews from './RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Product Page
        <ProductDetail />
        <RelatedItemsOutfit />
        <RatingsReviews />
      </div>
    );
  }
}

export default App;
