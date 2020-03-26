import axios, { AxiosResponse } from 'axios';
const postUrl = 'http://localhost:8000/images/';

const getPosts: () => Promise<AxiosResponse> = () => axios.get(postUrl);

export {
  getPosts,
}