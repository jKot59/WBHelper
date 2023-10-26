import { Pagination } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './advertisement.module.scss';

export function Advertisement({ advertisementList }: { advertisementList: any }) {
  const [pagesAmount, setPagesAmount] = useState(0);
  const [openedPage, setOpenedPage] = useState(1);

  useEffect(() => {
    if (advertisementList) setPagesAmount(advertisementList.at(-1).page);
  }, [advertisementList]);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Место</th>
            <th>Фото</th>
            <th>Артикул</th>
            <th>Позиция</th>
            <th>Ставка</th>
            <th>Категория</th>
            <th>Доставка</th>
          </tr>
        </thead>
        <tbody>
          {advertisementList
            ?.filter((adv: any) => adv.page === openedPage)
            .map((adv: any) => {
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
                  <td>{adv.cpm}</td>
                  <td>{adv.subject.name}</td>
                  <td>{adv.delivery_time} дн</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        className={styles.pagination}
        count={pagesAmount}
        onChange={(event, page: number) => setOpenedPage(page)}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
}
