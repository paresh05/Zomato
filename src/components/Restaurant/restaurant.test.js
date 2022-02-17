import { shallow } from 'enzyme';
import React from 'react';
import Delivery from '../../pages/Delivery';
import Restaurant from './Restaurant';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<Restaurant />)).toEqual(true);
  });
});
