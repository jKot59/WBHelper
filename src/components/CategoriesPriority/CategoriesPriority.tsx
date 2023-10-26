import styles from './categoriesPriority.module.scss';

export function CategoriesPriority() {
  return (
    <aside className={styles.container}>
      <h3 className={styles.title}>Приоритет категорий</h3>
      <ul className={styles.priority_list}>
        <li>Molestie placerat auctor eu orci phasellus imperdiet quam risus suspendisse.</li>
        <li>Eget</li>
        <li>Nisl nisl condimentum enim non cursus eget sit leo. Nulla eu ipsum pellentesque aliquam non cursus donec. Morbi nam.</li>
        <li>Eget gravida sit vel id enim euismod risus. Tellus.</li>
        <li>Pellentesque urna sollicitudin augue condimentum. Et in amet porta eu semper quis volutpat volutpat platea. Nullam amet.</li>
      </ul>
    </aside>
  );
}
