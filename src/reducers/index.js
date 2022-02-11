/**
 * This function is used to store the state using redux
 */

import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

const cardReducers = combineReducers({
  city: cardReducer,
});

export default cardReducers;
