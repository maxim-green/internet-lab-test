import classes from './Navigation.module.scss';

export const Navigation = () => {
  return <nav className={classes.navigation}>
    <ul className={classes.navigationList}>
      <li className={classes.navigationItem}>
        <a href="#how-it-works">
          Как это работает
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#third-block">
          3-й блок
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#questions-and-answers">
          Вопросы и ответы
        </a>
      </li>
      <li className={classes.navigationItem}>
        <a href="#form">
          Форма
        </a>
      </li>
    </ul>
  </nav>
}