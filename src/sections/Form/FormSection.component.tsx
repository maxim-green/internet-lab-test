import classes from './FormSection.module.scss';
import {Container} from '../../components/Container';
import {Input} from '../../components/Input';
import {useState} from "react";

export const FormSection = () => {
  const [name, setName] = useState('');

  return <section className={classes.formSection} id="form">
    <Container>
      <h2 className={classes.title}>
        Отправь форму
      </h2>
      <div>
        <Input
          value={name}
          onChange={setName}
          label="Имя"
        />
      </div>
    </Container>
  </section>
}