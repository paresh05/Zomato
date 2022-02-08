import axiosPost from '../helper/axios';

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

export default {
  login, register, getCards, getCollections,
};
