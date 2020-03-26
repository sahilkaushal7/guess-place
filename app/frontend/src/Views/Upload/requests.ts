import { AxiosResponse } from 'axios';
import { post } from '../../lib/utils';

const postUrl = 'http://localhost:8000/images/create/';

const postImage: (form_data: FormData ) => Promise<AxiosResponse> = (form_data) =>
  post(postUrl, form_data, true);

export {
  postImage,
}