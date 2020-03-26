import { AxiosResponse } from 'axios';
import { get } from '../../lib/utils';

const postUrl = 'http://localhost:8000/images/';
const getGuessesUrl = 'http://localhost:8000/guesses/?image=';

const getPosts: () => Promise<AxiosResponse> = () => get(postUrl, true);

const getGuesses: (imageId: number) => Promise<AxiosResponse> = (imageId) =>
  get(`${getGuessesUrl}${imageId}`, true);

export {
  getPosts,
  getGuesses,
}