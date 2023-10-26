import axios from 'axios';
import { getCookie } from 'cookies-next';
// import {authService} from "@/api/authService";

let accessToken = getCookie('token');

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
if (accessToken) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
