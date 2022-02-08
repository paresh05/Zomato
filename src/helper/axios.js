import axios from 'axios';

const apiPost = (requestObject) => axios({
  method: 'post',
  url: requestObject.url,
  data: requestObject.data,
  headers: requestObject.headers,
});
const apiGet = (requestObject) => axios({
  method: 'get',
  url: requestObject.url,
  headers: requestObject.headers,
});

export default { apiPost, apiGet };
