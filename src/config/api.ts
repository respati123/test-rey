import Axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL_API} from '@env';

export const BaseAxios = () => {
  let config: AxiosRequestConfig = {
    baseURL: BASE_URL_API,
    timeout: 250000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const api = Axios.create(config);

  api.interceptors.request.use(request => {
    if (process.env.NODE_ENV === 'development') {
      console.log('request ', request);
    }
    return request;
  });

  api.interceptors.response.use(response => {
    if (process.env.NODE_ENV === 'development') {
      console.log('request ', response);
    }
    return response;
  });

  return api;
};
