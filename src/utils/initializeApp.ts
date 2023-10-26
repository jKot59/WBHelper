import axios from 'axios';
import { serialize } from 'cookie';
import { setCookie } from 'cookies-next';

const API_URL = 'http://back-wb-helper.ru/api/v1';

export const initializeApp = async (req?: any, res?: any) => {
  try {
    // Выполните POST-запрос на сервер, чтобы получить токен
    const response = await axios.post(`${API_URL}/users/login/`, {
      email: 'timamasharipov@gmail.com',
      password: '5YwLYPD85zPa0GX8Ws89',
    });
    console.log('res', response);
    // Получите токен из ответа
    const token = response.data.access;

    // Устанавливаем куку в заголовке ответа
    // res.setHeader('Set-Cookie', [cookie]);
    setCookie('token', token);

    // Возвращаем успешный ответ
    // return res.status(200).end();
    return Promise.resolve();
  } catch (error: any) {
    // Обработка ошибок, например, отправка ошибки обратно на клиент
    console.log(error);
  }
};
