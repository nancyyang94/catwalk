/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import RelatedItemsOutfit from '../../../client/src/components/RelatedItemsOutfit/RelatedItemsOutfit';
import Overview from '../../../client/src/components/Overview/Overview';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import AppComponent from '../../../client/src/components/appComponent';

describe('RelatedItemsOutfit Component', () => {
  test('is rendering both carousels', () => {
    const wrapper = shallow(<RelatedItemsOutfit />);
    expect(wrapper.find('#carousel1')).toExist();
    expect(wrapper.find('#carousel2')).toExist();
  });
});

describe('AppComponent', () => {
  test('is rendering three widgets', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('RelatedItemsOutfit')).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(RatingsReviews)).toHaveLength(1);
  });
});

describe('AppComponent', () => {
  test('is rendering three widgets', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('RelatedItemsOutfit')).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(RatingsReviews)).toHaveLength(1);
  });
});

describe('RelatedItemsOutfit', () => {
  test('has received correct props', () => {
    const wrapper = mount(<AppComponent />);
    expect(wrapper.find(RelatedItemsOutfit)).toHaveProp('product');
    // expect(wrapper.find('RelatedItemsOutfit')).toHaveLength(1);
    // expect(wrapper.find('RelatedItemsOutfit')).toHaveLength(1);
  });
})