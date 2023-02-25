import axios from 'axios';
import axiosClient from './client';
import {ProfileBodyType} from './types';

export const checkDevice = async () => {
  const response: any = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return response.data;
};

export const AuthSendOtp = async (data: any) => {
  const response: any = await axiosClient.post('/auth/without-password', data);
  return response.data;
};

export const confirmOtp = async (data: {phone: string; otp: string}) => {
  const response: any = await axiosClient.post('/auth/otp/verification', data);
  return response.data;
};

export const createProfile = async ({
  cLedgerName,
  cEmail,
  nAcId,
}: ProfileBodyType) => {
  const response: any = await axiosClient.post(
    'CustomerRegister?cLedgerName=' +
      cLedgerName +
      '&cEmail=' +
      cEmail +
      '&nAcId=' +
      nAcId,
  );
  console.log('response', response);
  return response;
};

export const emailAuth = async ({email, password}: any) => {
  const response: any = await axiosClient.post('/auth/signin/email-password', {
    email,
    password,
  });
  return response.data;
};

export const refreshToken = async () => {
  const response: any = await axiosClient.post('/auth/refresh');
  return response.data;
};
