/* eslint-disable no-undef */
import React from 'react';
import App from '../../../client/src/components/app';

describe('Sidebar Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test('it renders Sidebar Component', () => {
    expect('Sidebar').not.toBeNull();
  });
  test('Sidebar received correct props', () => {
    expect(wrapper.find('Sidebar')).toHaveProp('product');
    expect(wrapper.find('Sidebar')).toHaveProp('currentStyle');
    expect(wrapper.find('Sidebar')).toHaveProp('updateCurrentStyle');
    expect(wrapper.find('Sidebar')).toHaveProp('windowWidth');
  });
});

describe('Overview Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test('it renders Sidebar Component', () => {
    expect('Overview').not.toBeNull();
  });
  test('Overview received correct props', () => {
    expect(wrapper.find('Overview')).toHaveProp('product');
    expect(wrapper.find('Overview')).toHaveProp('currentStyle');
    expect(wrapper.find('Overview')).toHaveProp('updateCurrentStyle');
    expect(wrapper.find('Overview')).toHaveProp('windowWidth');
  });
});
