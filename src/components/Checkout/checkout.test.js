import { shallow, mount, configure } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from '@testing-library/react';
import cardReducer from '../../reducers/index';
import Checkout from '../../pages/Checkout';
import CheckoutBody from './CheckoutBody';
import Summary from './Summary';

configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('Checkout Component', () => {
  test('renders header component', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.containsMatchingElement(<CheckoutBody />)).toEqual(true);
  });
  test('renders Cart component', () => {
    const deliveryAddress = {
      address: 'Ganesh Prasad',
      city: 'Mangalore',
      state: 'Karnataka',
      pinCode: '575014',
      mobile: '9731497540',
    };
    const component = mount(
      <Provider store={createStore(cardReducer, {})}>
        <CheckoutBody />
      </Provider>,
    );
    // console.log(component.debug());
    expect(component.find('h3').text()).toContain('Checkout');
    expect(component.containsMatchingElement(<Summary />)).toEqual(true);
  });
  test('renders summary component', () => {
    const deliveryAddress = {
      address: 'Ganesh Prasad',
      city: 'Mangalore',
      state: 'Karnataka',
      pinCode: '575014',
      mobile: '9731497540',
    };
    const component = mount(
      <Provider store={createStore(cardReducer, {})}>
        <Summary address={deliveryAddress} />
      </Provider>,
    );
    console.log(component.debug());
    expect(component.find('h5').text()).toContain('Summary');
    component.find('#placeOrderButton').first().props().onClick;
    // const button = component.find('#placeOrderButton').first();
    // console.log(button.debug());
    // act(() => {
    //   button.simulate("click");
    // });
    // const button = component.find("#placeOrderButton").exists();
    // expect(button).toBe(true);
  });
});
