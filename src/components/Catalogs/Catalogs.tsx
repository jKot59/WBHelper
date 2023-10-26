import { useEffect, useState } from 'react';
import styles from './catalogs.module.scss';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export function Catalogs() {
  const [catalogsList, setCatalogsList] = useState<any>(null);

  async function getCatalogsList() {
    const response = await axios.get(`http://back-wb-helper.ru/api/v1/wb/catalogs/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
    });
    console.log('catalogs', response.data);
    setCatalogsList(response.data.slice(0, 10));
  }

  useEffect(() => {
    getCatalogsList();
  }, []);
  return (
    <div className=''>
      {catalogsList?.map((catalog: { id: number; name: string }) => {
        return <div key={catalog.id}>{catalog.name}</div>;
      })}
    </div>
  );
}
