/* eslint-disable no-undef */
import React from 'react';
// import { shallow } from 'enzyme';
// import App from '../../../client/src/components/app';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';

describe('RatingsReviews', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RatingsReviews />);
  });
  test('it renders the ratings and reviews module', () => {
    expect(wrapper).not.toBeNull();
  });
});
