import { AxiosResponse } from 'axios';
import { get, put } from '../../Lib/utils';

const getProfileUrl = 'http://localhost:8000/userprofile/';

const getProfile: (userId: number) => Promise<AxiosResponse> = (userId) =>
  get(`${getProfileUrl}${userId}`, false);

const updateProfile: (userId: number, formData: FormData) => Promise<AxiosResponse> =
  (userId, formData) => put(`${getProfileUrl}${userId}/update/`, formData, true);

export {
  getProfile,
  updateProfile,
}