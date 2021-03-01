import React from 'react';
import mockData from './mockData';
import IndividualReview from './IndividualReview';
import ReviewListContainer from './styledComponents/ReviewListContainer';

console.log(mockData);

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
