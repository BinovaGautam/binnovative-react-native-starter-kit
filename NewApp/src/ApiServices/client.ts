import axios from 'axios';
import { getLocalTokens } from '../Utils';
import Environment from '../../environment'

let baseUrl = Environment.API_URL;
export const assetsUrl = baseUrl + 'assets/';

//DEFINITION OF THE CLIENT CLASS
const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

//ADD REQUIRED HEADERS TO THE REQUEST
axiosClient.interceptors.request.use(async (config: any) => {
  const tokens = await getLocalTokens();
  if (tokens) {
    config.headers.Authorization = `Bearer ${config.path === '/auth/refresh' ? tokens.refreshToken : tokens.accessToken
      }`;
    //config for multipart/form-data
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      console.log('INSIDE FROM MULTIPART', config)
      config = {
        ...config,
        transformRequest: [(data: any, _headers: any) => data],
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          console.log(Math.floor((loaded * 100) / total));
        },
      };
    }
  }
  return config;
});

//ADDED INTERCEPTOR FOR CLIENT CLASS
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('ERROR FROM INTERCEPTOR', error);
    let res = error.response;
    const invalidResponse = [400, 401, 404, 500, 503];

    if (res?.status === 403) {
      console.log('RESPONSE FROM 403', res)
      return res
    }

    if (invalidResponse.includes(res?.status)) {
      console.error('HAVE ERROR WHILE FETCHING', res.status, error);
      return Promise.reject(error);
    }
  },
);

export default axiosClient;
