import { Header } from '@/components/header/Header';
import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { useEffect, useState } from 'react';
import { initializeApp } from '@/utils/initializeApp';

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    initializeApp()
      .then(() => {
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error('Ошибка при аутентификации:', error);
      });
  }, []);

  return (
    <>
      {authenticated && (
        <div className='container'>
          <Header />
          <main className='main'>
            <Component {...pageProps} />
          </main>
        </div>
      )}
    </>
  );
}

export default MyApp;
