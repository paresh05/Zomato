import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Cards from './Cards';

describe('Card Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Cards />)).toEqual(true);
  });
});
