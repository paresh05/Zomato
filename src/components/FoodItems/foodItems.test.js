import { shallow } from 'enzyme';
import React from 'react';
import Delivery from '../../pages/Delivery';
import FoodItems from './FoodItems';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<FoodItems />)).toEqual(true);
  });
});
