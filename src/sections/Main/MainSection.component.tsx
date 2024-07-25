import classes from './MainSection.module.scss';
import {Button} from '../../components/Button';
import {Container} from '../../components/Container';
import {Navigation} from './Navigation';

export const MainSection = () => {
  return <div className={classes.mainSection}>
    <Container className={classes.container}>

      <div className={classes.menu}>
        <img
          src="assets/images/logo.svg"
          alt="testLab"
          className={classes.logo}
        />
        <Navigation/>
      </div>

      <div className={classes.content}>
        <h1 className={classes.title}>
          Говорят, никогда не поздно сменить профессию
        </h1>
        <p className={classes.text}>
          Сделай круто тестовое задание и у тебя получится
        </p>
        <Button>
          Проще простого!
        </Button>
      </div>

    </Container>
  </div>
}