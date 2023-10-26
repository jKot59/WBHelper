import { Advertisement } from '@/components/Advertisement/Advertisement';
import { CategoriesPriority } from '@/components/CategoriesPriority/CategoriesPriority';
import { CurrentBets } from '@/components/CurrentBets/CurrentBets';
import { InfoBlock } from '@/components/InfoBlock/InfoBlock';
import { Regions } from '@/components/Regions/Regions';
import styles from './index.module.scss';

export default function Home() {
  return (
    <section>
      <CurrentBets />
      <div className={styles.content}>
        <div>
          <Regions />
          <InfoBlock />
          <Advertisement />
        </div>
        <CategoriesPriority />
      </div>
    </section>
  );
}
