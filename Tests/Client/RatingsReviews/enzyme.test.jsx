/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import App from '../../../client/src/components/app';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import ReviewsList from '../../../client/src/components/RatingsReviews/ReviewsList/ReviewsList';

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
  it('renders the ratings breakdown column', () => {
    const wrapper = shallow(<RatingsReviews />);
    expect(wrapper.find('.ratings')).not.toBeNull();
  });

  it('renders the reviews list column', () => {
    const wrapper = shallow(<RatingsReviews />);
    expect(wrapper.find('.reviews')).not.toBeNull();
  });

describe('ButtonClick', () => {
  it('loads two more reviews upon clicking load more', () => {
    const wrapper = shallow()
  })
})

});
