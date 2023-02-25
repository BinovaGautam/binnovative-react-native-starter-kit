import axios from 'axios';
import {getLocalTokens} from '@/Utils';

let baseUrl = 'https://whereismytree.co.uk/';
// let baseUrl = 'http://localhost:4000/';
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
    config.headers.Authorization = `Bearer ${
      config.path === '/auth/refresh' ? tokens.refreshToken : tokens.accessToken
    }`;
    //config for multipart/form-data
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      config = {
        ...config,
        transformRequest: [(data: any, headers: any) => data],
        onUploadProgress: (progressEvent: any) => {
          const {loaded, total} = progressEvent;
          console.log(Math.floor((loaded * 100) / total));
        },
      };
    }
  }
  return config;
});

//ADDED INTERCEPTOR FOR CLIETN CLASS
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
    }
    console.error('HAVE ERROR WHILE FETCHING', res.status, error);
    return Promise.reject(error);
  },
);

export default axiosClient;
