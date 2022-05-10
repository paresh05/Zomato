/**
 * This function is used to create the actions for reducers
 */

import ActionTypes from '../constants/actionTypes';

export const fetchLocation = (city) => ({
  type: ActionTypes.LOCATION,
  payload: city,
});

export const fetchCart = (cart) => ({
  type: ActionTypes.ADDTOCART,
  payload: cart,
});

export const fetchTotal = (price) => ({
  type: ActionTypes.SUBTOTAL,
  payload: price,
});

export const fetchHotelName = (name) => ({
  type: ActionTypes.HOTELNAME,
  payload: name,
});

export const fetchFoodItem = (food) => ({
  type: ActionTypes.FOODITEM,
  payload: food,
});
