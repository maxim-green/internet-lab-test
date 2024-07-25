import classes from './FormSection.module.scss';
import {Container} from '../../components/Container';

export const FormSection = () => {
  return <section className={classes.formSection} id="form">
    <Container>
      <h2 className={classes.title}>
        Отправь форму
      </h2>
      <div>
        Form will be here
      </div>
    </Container>
  </section>
}