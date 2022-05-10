/* eslint-disable no-undef */
import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cardReducer from '../../reducers/index';
import Header from '../Header/Header';
import Topbar from './Topbar';
import Dashboard from '../../pages/Dashboard';
import Login from '../Login/Login';

configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('Home', () => {
  const component = mount(
    <Provider store={createStore(cardReducer, {})}>
      <Header />
    </Provider>,
  );
  test('contains header component', () => {
    expect(component.containsMatchingElement(<Topbar />)).toEqual(true);
  });
  test('login', () => {
    const setLogin = jest.fn();
    const onClose = jest.fn();
    const onOpen = jest.fn();
    const login = true;
    const wrapper = mount(<Topbar />);
    console.log(wrapper.debug());
    const handleLoginOpen = jest.spyOn(React, 'useState');
    handleLoginOpen.mockImplementation((login) => [login, setLogin]);
    expect(wrapper.find('#login').text()).toContain('Log in');
    wrapper.find('#login').simulate('click');
    const wrappe = mount(<Login login={login} onOpen={onOpen} onClose={onClose} />);
    expect(wrappe.isEmptyRender()).toBe(false);

    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });
});
