import classes from './ThirdBlockSection.module.scss';
import {Container} from '../../components/Container';


export const ThirdBlockSection = () => {
  return <div className={classes.thirdBlockSection}>
    <Container className={classes.container}>
      <div className={classes.content}>
        <h3 className={classes.title}>
          Круто, ты дошел до третьего блока
        </h3>
        <p className={classes.text}>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
          <br/>
          <br/>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
        </p>
      </div>
      <img src="assets/images/guy.png" alt=""/>
    </Container>
  </div>
}