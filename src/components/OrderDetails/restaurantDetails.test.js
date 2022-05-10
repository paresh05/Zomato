import { shallow } from 'enzyme';
import React from 'react';
import Order from '../../pages/Order';
import RestaurantDetails from './RestaurantDetails';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Order />);
    expect(wrapper.containsMatchingElement(<RestaurantDetails />)).toEqual(true);
  });
  // it('renders header component', () => {
  //   const wrapper = shallow(<RestaurantDetails />);
  //   console.log(wrapper.debug());
  //   // expect(wrapper.containsMatchingElement(<RestaurantDetails />)).toEqual(true);
  // });
});