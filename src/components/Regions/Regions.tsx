import { Button } from '@mui/material';
import styles from './regions.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import useRegionsLogic from './useRegionsLogic';

function Regions() {
  const { regionsList } = useRegionsLogic();

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

export default Regions;
