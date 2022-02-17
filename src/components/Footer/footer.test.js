import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Delivery from '../../pages/Delivery';
import Explore from './Explore';
import Footer from './Footer';
import GetApp from './GetApp';

describe('Footer Component', () => {
  it('renders Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
describe('Footer Component', () => {
  it('renders Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<GetApp />)).toEqual(true);
  });
});
describe('Footer Component', () => {
  it('renders Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Explore />)).toEqual(true);
  });
});
describe('Footer Component', () => {
  it('renders Delivery component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<Explore />)).toEqual(true);
  });
});
describe('Footer Component', () => {
  it('renders Delivery component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
