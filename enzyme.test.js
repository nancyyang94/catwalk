/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { mount, shallow } from 'enzyme';

function Fixture() {
  return (
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
    </div>
  );
}

const wrapper = mount(<Fixture />); // mount/render/shallow when applicable

test('enzyme is working', () => {
  expect(wrapper.find('#checked')).toBeChecked();
  expect(wrapper.find('#not')).not.toBeChecked();
});
