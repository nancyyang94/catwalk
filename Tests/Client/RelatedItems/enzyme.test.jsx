// /* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import RelatedItemsOutfit from '../../../client/src/components/RelatedItemsOutfit/RelatedItemsOutfit';
import Overview from '../../../client/src/components/Overview/Overview';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import AppComponent from '../../../client/src/components/appComponent';

describe('My Component', () => {
  test('is rendering both carousels', () => {
    const wrapper = shallow(<RelatedItemsOutfit />);
    expect(wrapper.find('#carousel1')).toExist();
    expect(wrapper.find('#carousel2')).toExist();
  });
});

describe('My Component', () => {
  test('is rendering three widgets', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find(RelatedItemsOutfit)).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(RatingsReviews)).toHaveLength(1);
  });
});