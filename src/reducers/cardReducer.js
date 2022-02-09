import ActionTypes from '../constants/actionTypes';

const initialState = {
  location: 'Bengaluru',
};

// eslint-disable-next-line default-param-last
const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOCATION:
      return { ...state, location: payload };
    default:
      return state;
  }
};

export default cardReducer;
