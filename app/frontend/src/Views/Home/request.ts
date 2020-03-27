import { AxiosResponse } from 'axios';
import { get, post } from '../../lib/utils';

const postUrl = 'http://localhost:8000/images/';
const getGuessesUrl = 'http://localhost:8000/guesses/image/';
const guessUrl = 'http://localhost:8000/guesses/create/';
const detailPostUrl = 'http://localhost:8000/images/';

const getPosts: () => Promise<AxiosResponse> = () => get(postUrl, false);

const getDetailedPost: (postId: number) => Promise<AxiosResponse> = (postId) =>
  get(`${detailPostUrl}${postId}`, true);

const getGuesses: (imageId: number) => Promise<AxiosResponse> = (imageId) => {
  const url = getGuessesUrl + imageId;
  return get(url, false);
}

const submitGuess: (formData: FormData) => Promise<AxiosResponse> = (formData) =>
  post(guessUrl, formData, true);

export {
  getPosts,
  getGuesses,
  submitGuess,
  getDetailedPost,
}