import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

const cardReducers = combineReducers({
  city: cardReducer,
});

export default cardReducers;
