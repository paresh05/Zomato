import ActionTypes from '../constants/actionTypes';

const fetchLocation = (city) => ({
  type: ActionTypes.LOCATION,
  payload: city,
});

export default fetchLocation;
