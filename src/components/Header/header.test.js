import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Delivery from '../../pages/Delivery';
import Header from './Header';
import DeliveryHeader from './DeliveryHeader';
import CheckoutHeader from './CheckoutHeader';
import Checkout from '../../pages/Checkout';

describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper.containsMatchingElement(<DeliveryHeader />)).toEqual(true);
  });
});
describe('Header Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.containsMatchingElement(<CheckoutHeader />)).toEqual(true);
  });
});