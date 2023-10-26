import Image from 'next/image';
import styles from './header.module.scss';
import logo from '@/assets/icons/logo.svg';
import userAratar from '@/assets/images/userAratar.jpg';

export function Header() {
  return (
    <header className={styles.container}>
      <Image src={logo} alt='logotype' />
      <ul className={styles.menu}>
        <li>Продавцы</li>
        <li>Мои компании</li>
        <li>Актуальные ставки</li>
        <li>Возможности</li>
      </ul>
      <div className={styles.user}>
        <div>Поддержка</div>
        <div>Тарифы</div>
        <div>{/* <Image src={} alt='bell icon' /> */}</div>
        <div>
          <Image src={userAratar} alt='user avatar' />
        </div>
      </div>
    </header>
  );
}
