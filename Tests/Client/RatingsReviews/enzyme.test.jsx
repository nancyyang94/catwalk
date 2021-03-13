/* eslint-disable no-undef */
import React from 'react';
// import { shallow } from 'enzyme';
// import App from '../../../client/src/components/app';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import Rating from '../../../client/src/components/RatingsReviews/RatingsBreakdown/Ratings';
import RatingSummary from '../../../client/src/components/RatingsReviews/RatingsBreakdown/RatingSummary';
import AverageStarRating from '../../../client/src/components/RatingsReviews/RatingsBreakdown/AverageStarRating';
import StarRatings from '../../../client/src/components/RatingsReviews/ReviewsList/StarRatings';
import ReviewList from '../../../client/src/components/RatingsReviews/ReviewsList/ReviewsList';
import ProductBreakdownContainer from '../../../client/src/components/RatingsReviews/ProductBreakdown/ProductBreakdownContainer';
import IndividualFactor from '../../../client/src/components/RatingsReviews/ProductBreakdown/IndividualFactor';

const props = {
  id: 14824,
  name: 'Korbin Heels',
  reviews: [
    {
      review_id: 1,
      rating: 3,
      summary: 'text',
      body: 'text',
      recommend: false,
      date: '2020-12-03T00:00:00.000Z',
      helpfulness: 4,
      reviewer_name: 'nancy',
      response: null,
    }],
};

describe('RatingsReviews', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RatingsReviews />);
  });
  test('it renders the ratings and reviews module', () => {
    expect(wrapper).not.toBeNull();
  });
});

describe('BreakdownAndList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RatingsReviews />);
  });

  it('renders the ratings breakdown column', () => {
    expect(wrapper.find('.ratings')).not.toBeNull();
  });

  it('renders the reviews list column', () => {
    expect(wrapper.find('.reviews')).not.toBeNull();
  });
});

describe('ReviewList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ReviewList product={props} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders the individual review', () => {
    expect(wrapper.find('.individual')).toHaveLength(1);
  });
  test('it renders the submit new review button', () => {
    expect(wrapper.find('.new-review')).toHaveLength(1);
  });
});

describe('RatingBreakdown', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Rating product={props} reviews={props.reviews} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders the recommendations', () => {
    expect(wrapper.find('.recommendations')).toHaveLength(1);
  });
  test('it renders the percentage of recommendations', () => {
    expect(wrapper.find('.number-percent')).toHaveLength(1);
  });
});

describe('RatingSummary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RatingSummary reviews={props.reviews} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders the star container', () => {
    expect(wrapper.find('.stars')).toHaveLength(1);
  });
});

describe('AverageStarRating', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AverageStarRating avg={4} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders the star rating and the number rating', () => {
    expect(wrapper.find('.average')).toHaveLength(2);
  });
});

describe('ProductBreakdown', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ProductBreakdownContainer
      reviews={props.reviews}
      total={props.reviews.length}
      id={props.id}
    />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders the product breakdown', () => {
    expect(wrapper.find('.all-ratings')).toHaveLength(1);
  });
});

describe('IndividualFactor', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<IndividualFactor
      factor="size"
      meaning1="small"
      meaning5="large"
      percentage="40%"
    />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
});

describe('StarRatings', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<StarRatings
      rating={4}
    />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('individual stars container should contain one element', () => {
    expect(wrapper.find('.individual-stars')).toHaveLength(1);
  });
});
