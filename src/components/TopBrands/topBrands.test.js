import { shallow } from 'enzyme';
import React from 'react';
import Delivery from '../../pages/Delivery';
import TopBrands from './TopBrands';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<TopBrands />)).toEqual(true);
  });
});
