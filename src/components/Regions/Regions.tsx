import { Button } from '@mui/material';
import styles from './regions.module.scss';
import { RootState } from '@/app/GlobalRedux/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

export function Regions() {
  async function getRegions() {
    const response = await axios.get(`http://back-wb-helper.ru/api/v1/wb/regions/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
    });
  }

  useEffect(() => {
    console.log(getCookie('token'));
    getRegions();
  }, []);

  return (
    <div className={styles.container}>
      {[].map((region: any) => {
        return (
          <Button key={region.id} className={styles.region_btn} variant='outlined'>
            {/* {region.} */}
          </Button>
        );
      })}
    </div>
  );
}
