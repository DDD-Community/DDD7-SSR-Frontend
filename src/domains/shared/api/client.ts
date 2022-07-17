import Axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';

const axios = Axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originalRequest = config;
      const refreshToken = localStorage.getItem('dewsRefreshToken');

      try {
        const data = await client.post('/refresh-token', { refreshToken });
        localStorage.setItem('dewsToken', data);
        originalRequest.headers.Authorization = `Bearer ${data}`;
        return axios(originalRequest);
      } catch (e) {
        console.log(e);
        clearAuthToken();
      }
    }

    if (status === 500) {
      clearAuthToken();
    }
    return Promise.reject(error);
  },
);

export function setAuthToken(authToken: string | undefined | null): void {
  if (authToken == undefined) return;
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

export function clearAuthToken(): void {
  axios.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('dewsToken');
  localStorage.removeItem('dewsRefreshToken');
}

const client = {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, config);

    return response.data;
  },

  async post(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.post(url, body, config);

    return response.data;
  },

  async put(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, config);

    return response.data;
  },

  async patch(url: string, body?: any, config?: AxiosRequestConfig) {
    const response = await axios.patch(url, body, config);

    return response.data;
  },

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await axios.delete(url, config);

    return response.data;
  },
};

export default client;
