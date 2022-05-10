import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Cards from './Cards';

configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Card Component', () => {
  test('renders header component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Cards />)).toEqual(true);
  });
  test('orderOnline', () => {
    const wrapper = mount(<Cards />);
    console.log(wrapper.debug());
    // expect(wrapper.find("#orderOnline").text()).toContain("Log in");
    // console.log(wrapper.find('#orderOnline').get(1).debug());
    // wrapper.find("Card").first().props().onClick;
    // expect(wrapper.containsMatchingElement(<Login login={login} onOpen={onOpen} onClose={onClose} />)).toEqual(true);
  });
});
