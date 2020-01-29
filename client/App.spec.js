import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from './App.jsx';
import Reviews from './Reviews.jsx';

describe('App', () => {
  test('snapshots', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('App renders Reviews', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Reviews).length).toEqual(1);
  });
});
