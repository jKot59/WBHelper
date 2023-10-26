import styles from './categoriesPriority.module.scss';

export function CategoriesPriority({ priorotyList }: { priorotyList: any }) {
  return (
    <aside className={styles.container}>
      <h3 className={styles.title}>Приоритет категорий</h3>
      <ul className={styles.priority_list}>
        {priorotyList.map((priority: any) => {
          return (
            <li key={priority.id}>
              <span>{priority.position}</span>&nbsp;
              {priority.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
