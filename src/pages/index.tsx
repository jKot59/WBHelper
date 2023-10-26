import { Advertisement } from '@/components/Advertisement/Advertisement';
import { CurrentBets } from '@/components/CurrentBets/CurrentBets';
import { Regions } from '@/components/Regions/Regions';
import { initializeApp } from '@/utils/initializeApp';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   login({
  // email: 'timamasharipov@gmail.com',
  // password: '5YwLYPD85zPa0GX8Ws89',
  //   });
  // }, []);

  // useEffect(() => {
  //   if (data?.access) localStorage.setItem('token', data.access);
  // }, [data]);

  return (
    <section>
      <CurrentBets />
      <Advertisement />
      <Regions />
    </section>
  );
}
