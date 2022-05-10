import { shallow } from 'enzyme';
import React from 'react';
import Topbar from '../Topbar/Topbar';
import Login from './Login';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });
});
