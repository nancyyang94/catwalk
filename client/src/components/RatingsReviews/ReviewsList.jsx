import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IndividualReview from './IndividualReview';
import ReviewListContainer from './styledComponents/ReviewListContainer';
import NewReview from './NewReview';

function ReviewsList({ product }) {
  const { reviews } = product;
  let list;
  let hasReviews = false;
  // const [list, setList] = useState('Page loading...');
  // const [lastIndex, setIndex] = useState(0);

  if (reviews === undefined) {
    hasReviews = 'undefined';
  }

  if (reviews && reviews.length > 0) {
    hasReviews = true;
    list = reviews.map((review) => <IndividualReview review={review} key={review.review_id} />);
  }

  return (
    <ReviewListContainer>
      <div className="individual">
        {hasReviews === 'undefined' ? 'Page loading...' : 'Other' }
        {hasReviews ? list : 'Be the first to write a review.' }
        {/* {list} */}
      </div>
      <br />
      <NewReview productName={product.name} />
    </ReviewListContainer>
  );
}

ReviewsList.propTypes = {
  product: PropTypes.shape(),
};

ReviewsList.defaultProps = {
  product: null,
};

export default ReviewsList;


  // const { reviews } = product;
  // const { id } = product;
  // const [currentProduct, setCurrentProduct] = useState(id);
  // const [list, setList] = useState([]);
  // const [lastIndex, setLastIndex] = useState(2);

  // function displayReviews() {
  //   const copyList = reviews.slice(0, lastIndex);
  //   setList(copyList);
  //   setLastIndex(2);
  // }

  // useEffect(() => {
  //   let unmounted = false;
  //   setTimeout(() => {
  //     if (!unmounted) {
  //       if (reviews !== undefined && reviews.length) {
  //         console.log('plop!');
  //         displayReviews();
  //       }
  //     }
  //   }, 50);
  //   return () => {
  //     unmounted = true;
  //   };
  // }, [product]);

  // console.log('list:', list);
  // console.log('reviews:', reviews);
  // console.log('copyList:', copyList);

  // useEffect(() => {
  //   setLastIndex(2);
  //   setList(reviews.slice(0, 2));
  //   setCurrentProduct(id);
  // }, [currentProduct]);
  // function setIndex() {
  //   console.log('plop: setting index fosho');
  //   setLastIndex((prevLastIndex) => prevLastIndex + 2);
  //   setList(reviews.slice(0, lastIndex));
  //   displayReviews();
  // }
