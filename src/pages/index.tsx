import { Advertisement } from '@/components/Advertisement/Advertisement';
import { CategoriesPriority } from '@/components/CategoriesPriority/CategoriesPriority';
import { CurrentBets } from '@/components/CurrentBets/CurrentBets';
import { InfoBlock } from '@/components/InfoBlock/InfoBlock';
import Regions from '@/components/Regions/Regions';
import { baseUrl } from '@/consts/baseUrl';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export default function Home() {
  const [advertisementList, setAdvertisementList] = useState<any>(null);
  const [priorityList, setPriorityList] = useState([]);

  async function getAdvertisement() {
    const response = await axios.get(`${baseUrl}/wb/adverts/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
      params: {
        input: 'ручка',
        type: '6',
      },
    });

    setAdvertisementList(response.data.bets);
    setPriorityList(response.data.subject_priorities);
  }

  useEffect(() => {
    getAdvertisement();
  }, []);

  return (
    <section>
      <CurrentBets />
      <div className={styles.content}>
        <div>
          <Regions />
          <InfoBlock />
          <Advertisement advertisementList={advertisementList} />
        </div>
        <CategoriesPriority priorotyList={priorityList} />
      </div>
    </section>
  );
}
