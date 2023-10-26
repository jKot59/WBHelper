import { Button } from '@mui/material';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import styles from './regions.module.scss';

export function Regions() {
  const [regionsList, setRegionsList] = useState<any>(null);

  async function getRegions() {
    const response = await axios.get(`http://back-wb-helper.ru/api/v1/wb/regions/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
    });
    console.log('regions', response.data);
    setRegionsList(response.data);
  }

  useEffect(() => {
    getRegions();
  }, []);

  return (
    <div className={styles.container}>
      {regionsList?.map((region: any) => {
        return (
          <Button key={region.id} className={styles.region_btn} variant='outlined'>
            {region.name}
          </Button>
        );
      })}
    </div>
  );
}
