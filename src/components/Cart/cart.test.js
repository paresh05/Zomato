/* eslint-disable no-undef */
import { configure, mount, shallow } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Order from '../../pages/Order';
import cardReducer from '../../reducers/index';
import Cart from './Cart';

configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Cart Component', () => {
  test('renders Cart component', () => {
    const wrapper = shallow(<Order />);
    expect(wrapper.containsMatchingElement(<Cart />)).toEqual(true);
  });
  const component = mount(
    <Provider store={createStore(cardReducer, {})}>
      <Cart />
    </Provider>,
  );
  // test('renders Cart component', () => {
  //   console.log(component.debug());
  //   expect(component.find("#orderTitle").first().text()).toContain("Log in");
  //   // expect(wrapper.containsMatchingElement(<Cart />)).toEqual(true);
  // });
});
