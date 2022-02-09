import { createStore } from 'redux';
import cardReducer from './reducers/index';

const store = createStore(
  cardReducer,
  {},
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
