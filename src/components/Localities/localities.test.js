import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Localities from './Localities';

describe('Card Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Localities />)).toEqual(true);
  });
});
