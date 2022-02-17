/**
 * This functions makes the axious request and fetches the data
 */

import axios from 'axios';

/**
 * This function make axious post request to the url provided
 * @returns the response from the backend
 */
const apiPost = (requestObject) => axios({
  method: 'post',
  url: requestObject.url,
  data: requestObject.data,
  headers: requestObject.headers,
});

/**
 * This function make axious get request to the url provided
 * @returns the response from the backend
 */
const apiGet = (requestObject) => axios({
  method: 'get',
  url: requestObject.url,
  headers: requestObject.headers,
});

const apiDelete = (requestObject) => axios({
  method: 'delete',
  url: requestObject.url,
  data: requestObject.data,
  headers: requestObject.headers,
});

const apiUpdate = (requestObject) => axios({
  method: 'put',
  url: requestObject.url,
  data: requestObject.data,
  headers: requestObject.headers,
});

export default {
  apiPost,
  apiGet,
  apiDelete,
  apiUpdate,
};
