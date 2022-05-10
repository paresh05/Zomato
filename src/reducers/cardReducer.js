/**
 * This function is used to store the state using redux
 */
import ActionTypes from '../constants/actionTypes';

const initialState = {
  location: 'Bengaluru',
  foodItem: ' ',
  addToCart: [],
  subTotal: 0,
  hotelName: '',
};

// eslint-disable-next-line default-param-last
const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOCATION:
      return { ...state, location: payload };
    case ActionTypes.FOODITEM:
      return { ...state, foodItem: payload };
    case ActionTypes.ADDTOCART:
      return { ...state, addToCart: payload };
    case ActionTypes.SUBTOTAL:
      return { ...state, subTotal: payload };
    case ActionTypes.HOTELNAME:
      return { ...state, hotelName: payload };
    default:
      return state;
  }
};

export default cardReducer;
