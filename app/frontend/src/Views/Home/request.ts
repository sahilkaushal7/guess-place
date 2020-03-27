import { AxiosResponse } from 'axios';
import { get, post } from '../../lib/utils';

const postUrl = 'http://localhost:8000/images/';
const getGuessesUrl = 'http://localhost:8000/guesses/image/';
const guessUrl = 'http://localhost:8000/guesses/create/';

const getPosts: () => Promise<AxiosResponse> = () => get(postUrl, false);

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
}