import classes from './HowItWorksSection.module.scss';
import {Container} from '../../components/Container';

export const HowItWorksSection = () => {
  return <section className={classes.howItWorksSection} id="how-it-works">
    <Container>
      <h2 className={classes.title}>
        Как это работает
      </h2>
      <ul className={classes.items}>
        <li className={classes.item}>
          <img src="assets/images/waiting.png" alt="waiting"/>
          <h6>
            Прочитай задание внимательно
          </h6>
          <p>
            Думаю у тебя не займет это больше двух-трех минут
          </p>
        </li>
        <li className={classes.item}>
          <img src="assets/images/delivery-truck.png" alt="waiting"/>
          <h6>
            Изучи весь макет заранее
          </h6>
          <p>
            Подумай как это будет работать на разных разрешениях и при скролле
          </p>
        </li>
        <li className={classes.item}>
          <img src="assets/images/secure.png" alt="waiting"/>
          <h6>
            Сделай хорошо
          </h6>
          <p>
            Чтобы мы могли тебе доверить подобные задачи в будущем
          </p>
        </li>
        <li className={classes.item}>
          <img src="assets/images/money-bags.png" alt="waiting"/>
          <h6>
            Получи предложение
          </h6>
          <p>
            Ну тут все просто, не я придумал правила, но думаю так и будет)))
          </p>
        </li>
      </ul>
    </Container>
  </section>
}