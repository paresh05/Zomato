/**
 * These functions make a request to axios by providing the url's
 * @returns the response from the axios
 */

import axiosPost from '../helper/axios';

const qs = require('qs');

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
const getCollections = (city) => {
  const query = qs.stringify({
    filters: {
      location: {
        $eq: ['all', city],
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  const reqObj = {
    url: `/api/collections?${query}`,
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

// Function to get the restaurants by id for the location
const getRestaurantbyId = (id) => {
  const reqObj = {
    url: `/api/restaurants/${id}`,
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
// Function to add items to cart
const postToCart = (data) => {
  const reqObj = {
    data,
    url: '/api/carts',
    headers: {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};
// Function to get all the items from cart
const getCart = () => {
  const reqObj = {
    url: '/api/carts',
    headers: {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to update the cart items
const updateCart = (data, id) => {
  const reqObj = {
    data,
    url: `/api/carts/${id}`,
    headers: {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    },
  };
  return axiosPost
    .apiUpdate(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to delete the items from the cart
const deleteCart = (id) => {
  const reqObj = {
    url: `/api/carts/${id}`,
    headers: {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    },
  };
  return axiosPost
    .apiDelete(reqObj)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

// Function to add the items to order list
const postToOrder = (data) => {
  const reqObj = {
    data,
    url: '/api/orders',
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

// Function to get all the order items 
const getOrder = () => {
  const reqObj = {
    url: '/api/orders',
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
  login,
  register,
  getCards,
  getCollections,
  getFoodItems,
  getLocalities,
  getBrands,
  getRestaurant,
  getRestaurantbyId,
  postToCart,
  getCart,
  updateCart,
  deleteCart,
  postToOrder,
  getOrder,
};
