/**
 * This function is used to create the actions for reducers
 */

import ActionTypes from '../constants/actionTypes';

const fetchLocation = (city) => ({
  type: ActionTypes.LOCATION,
  payload: city,
});

export default fetchLocation;
