import { ReduxProvider } from '@/app/GlobalRedux/ReduxProvider';
import { Header } from '@/components/header/Header';
import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { useEffect, useState } from 'react';
import { initializeApp } from '@/utils/initializeApp';

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Вызов функции initializeApp
    initializeApp()
      .then(() => {
        // Устанавливаем флаг аутентификации в true
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error('Ошибка при аутентификации:', error);
        // Обработка ошибок
      });
  }, []);

  return (
    <ReduxProvider>
      {authenticated && (
        <div className='container'>
          <Header />
          <main>
            {authenticated}
            <Component {...pageProps} />
          </main>
        </div>
      )}
    </ReduxProvider>
  );
}

export default MyApp;
