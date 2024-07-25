import classes from './FooterSection.module.scss';
import {Container} from '../../components/Container';

export const FooterSection = () => {
  return <footer className={classes.footerSection}>
    <Container>
      <p className={classes.text}>
        © 2021 Лаборатория интернет
      </p>
    </Container>
  </footer>
}