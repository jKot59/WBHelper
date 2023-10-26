import { useEffect, useState } from 'react';
import styles from './advertisement.module.scss';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import Image from 'next/image';

export function Advertisement() {
  const [advertisementList, setAdvertisementList] = useState<any>(null);

  async function getAdvertisement() {
    const response = await axios.get(`http://back-wb-helper.ru/api/v1/wb/adverts/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
      params: {
        input: 'ручка',
        type: '6',
      },
    });
    console.log('adv', response.data);
    setAdvertisementList(response.data.bets);
  }

  useEffect(() => {
    getAdvertisement();
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <th>Место</th>
          <th>Фото</th>
          <th>Артикул</th>
          <th>Позиция</th>
          <th>Ставка</th>
          <th>Категория</th>
          <th>Доставка</th>
        </thead>
        <tbody>
          {advertisementList?.map((adv: any) => {
            return (
              <tr key={adv.advert_id}>
                <td>{adv.position}</td>
                <td>
                  <Image src={adv.image} alt='product image' width={50} height={65} />
                </td>
                <td>
                  <a href={adv.url}>{adv.article}</a>
                </td>
                <td>{adv.position}</td>
                <td>{adv.cmp}</td>
                <td>{adv.advert_id}</td>
                <td>{adv.delivery_time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
