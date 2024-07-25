import classes from './FormSection.module.scss';
import {Container} from '../../components/Container';
import {Input} from '../../components/Input';

export const FormSection = () => {
  return <section className={classes.formSection} id="form">
    <Container>
      <h2 className={classes.title}>
        Отправь форму
      </h2>
      <div>
        <Input
          value="123"
          onChange={(value) => console.log(value)}
          label="Имя"
        />
      </div>
    </Container>
  </section>
}