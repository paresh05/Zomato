/**
 * These functions make a request to axios by providing the url's
 * @returns the response from the axios
 */

import axiosPost from '../helper/axios';

// Function to enable the user to login
const login = (data) => {
  const reqObj = {
    data,
    url: '/api/auth/local',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

// Function to enable the user to register
const register = (data) => {
  const reqObj = {
    data,
    url: '/api/auth/local/register',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the cards
const getCards = () => {
  const reqObj = {
    url: '/api/cards',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the collections for the location
const getCollections = () => {
  const reqObj = {
    url: '/api/collections',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the food items
const getFoodItems = () => {
  const reqObj = {
    url: '/api/foods',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the localities for the location
const getLocalities = () => {
  const reqObj = {
    url: '/api/localities',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the top brands
const getBrands = () => {
  const reqObj = {
    url: '/api/brands',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to get all the restaurants for the location
const getRestaurant = () => {
  const reqObj = {
    url: '/api/restaurants',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export default {
  login, register, getCards, getCollections, getFoodItems, getLocalities, getBrands, getRestaurant,
};
