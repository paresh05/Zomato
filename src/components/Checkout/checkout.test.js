import { shallow } from 'enzyme';
import React from 'react';
import Checkout from '../../pages/Checkout';
import CheckoutBody from './CheckoutBody';
import Summary from './Summary'

describe('Checkout Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.containsMatchingElement(<CheckoutBody />)).toEqual(true);
  });
});
describe('Checkout Component', () => {
  it('renders header component', () => {
    const wrapper = shallow(<CheckoutBody />);
    expect(wrapper.containsMatchingElement(<Summary />)).toEqual(true);
  });
});
