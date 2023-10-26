import { baseUrl } from '@/consts/baseUrl';
import axios from 'axios';
import { setCookie } from 'cookies-next';

export const initializeApp = async (req?: any, res?: any) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login/`, {
      email: 'timamasharipov@gmail.com',
      password: '5YwLYPD85zPa0GX8Ws89',
    });

    const token = response.data.access;

    setCookie('token', token);
  } catch (error: any) {
    console.log('error', error);
  }
};
