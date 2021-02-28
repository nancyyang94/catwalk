import React from 'react';
import styled from 'styled-components';
import mockData from './mockData';
import IndividualReview from './IndividualReview';

console.log(mockData);

const ReviewListContainer = styled.div`
  background-color: #ffffff;
  color: #525252;
  grid-column: 2 / 4;
  padding: 25px;

  .sort {
    display: flex;
  }
`;

const ReviewsList = () => (
  <ReviewListContainer>
    <h3>Reviews List</h3>
    <div className="sort">
      <p>
        248 reviews sorted by
        <button type="button">
          relevance
        </button>
      </p>
    </div>
    {/* <IndividualReview />
    <IndividualReview /> */}
    {/* <div>Review 2 </div> */}
    {mockData.map((review) => (
      <IndividualReview review={review} key={review.review_id} />
    ))}
    <button type="button">More Reviews</button>
    <button type="button">Write New Review</button>
  </ReviewListContainer>
);

export default ReviewsList;
