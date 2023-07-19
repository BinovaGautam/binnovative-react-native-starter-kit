import axios from 'axios';
import axiosClient from './client';

export const AuthSendOtp = async (data: any) => {
  const response: any = await axiosClient.post('/auth/without-password', data);
  return response.data;
};

export const confirmOtp = async (data: {phone: string; otp: string}) => {
  const response: any = await axiosClient.post('/auth/otp/verification', data);
  return response.data;
};


export const refreshToken = async () => {
  const response: any = await axiosClient.post('/auth/refresh');
  return response.data;
};
