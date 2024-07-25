import classes from './Navigation.module.scss';

export const Navigation = () => {
  return <nav className={classes.navigation}>
    <ul className={classes.navigationList}>
      <li className={classes.navigationItem}>
        <a href="#">
          Как это работает
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#">
          3-й блок
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#">
          Вопросы и ответы
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#">
          Форма
        </a>
      </li>
    </ul>
  </nav>
}