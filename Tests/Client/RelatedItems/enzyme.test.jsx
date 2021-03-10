/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import RelatedItemsOutfit from '../../../client/src/components/RelatedItemsOutfit/RelatedItemsOutfit';
import Overview from '../../../client/src/components/Overview/Overview';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import AppComponent from '../../../client/src/components/appComponent';
import App from '../../../client/src/components/app';
import ProductCard from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/productCard';
import ImageGallery from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/imageGallery';

const props = {
  category: 'Skirt',
  defaultPrice: '473.00',
  features: [],
  id: 14755,
  name: '',
  reviews: [],
  styleId: 13232,
  style: '',
  salePrice: '222.00',
  default: true,
  photos: [],
};

describe('AppComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AppComponent />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('is rendering three widgets', () => {
    expect(wrapper.find('relatedItemsOutfit')).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(RatingsReviews)).toHaveLength(1);
  });
});

describe('RelatedItemsOutfit Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test('it renders RelatedItemsOutfit Component', () => {
    expect('relatedItemsOutfit').not.toBeNull();
  });
  test('is rendering both carousels', () => {
    expect(wrapper.find('#carousel1')).toExist();
    expect(wrapper.find('#carousel2')).toExist();
  });
  test('RelatedItemsOutfit received correct props', () => {
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('product');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('getProduct');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('currentStyle');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('comparisonModal');
  });
  test('has a title for the carousels', () => {
    expect(wrapper.find('title')).toExist();
  });
});

describe('ProductCard Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductCard productInfo={props} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders Product Link', () => {
    expect(wrapper.find('productContainer')).toHaveLength(1);
  });
  test('it renders Related Action Button', () => {
    expect(wrapper.find('relatedAction')).toHaveLength(1);
  });
  test('it renders Descriptions', () => {
    expect(wrapper.find('descriptions')).toHaveLength(1);
  });
  test('it renders ImageGallery', () => {
    expect(wrapper.find('imageGallery')).toHaveLength(1);
  });
});
