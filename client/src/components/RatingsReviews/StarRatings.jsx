import React from 'react';
import Star from './Star';

// const getAverageRating = (product) => {

// };

class StarRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 0,
    };
  }

  render() {
    return (
      <p>Should be our five stars</p>
    );
  }
}

export default StarRatings;
