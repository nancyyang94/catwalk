import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const RatingsContainer = styled.div`
  background-color: #ffffff;
  color: #525252;
  padding: 25px;

  h1 {
    font-size: 50px;
    margin-top: 0px;
    margin-right: 20px;
  }

  .star-summary {
    display: flex;
  }
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      average: 2.0,
    };
    this.starRating = this.starRating.bind(this);
    this.ratingsBreakdown = this.ratingsBreakdown.bind(this);
  }

  ratingsBreakdown() {
    const { reviews } = this.state;
    console.log({ reviews });
    return (
      <div>
        ratings breakdown....
        <p>100% of reviews recommend this product</p>
      </div>
    );
  }

  starRating() {
    const { average } = this.state;
    return (
      <ReactStars
        count={5}
        value={average}
        size={24}
        activeColor="#525252"
        isHalf
        edit={false}
      />
    );
  }

  render() {
    const { reviews, average } = this.state;
    console.log({ reviews, average });
    return (
      <RatingsContainer>
        <p>Ratings and Reviews</p>
        <div className="star-summary">
          <h1>{average}</h1>
          {this.starRating()}
        </div>
        {this.ratingsBreakdown()}
        <div> User Recommendations </div>
        <div> Product Breakdown </div>
      </RatingsContainer>
    );
  }
}

export default Ratings;
