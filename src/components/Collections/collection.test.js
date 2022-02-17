import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Collection from './Collection';

describe('Card Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Collection />)).toEqual(true);
  });
});
