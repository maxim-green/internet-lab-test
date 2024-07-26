import classes from './FormSection.module.scss';
import {Container} from '../../components/Container';
import {Input} from '../../components/Input';
import {useState} from "react";
import {Button} from '../../components/Button';
import {Checkbox} from '../../components/Checkbox';

export const FormSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const buttonClickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ name, phone })
    })
      .then(response => response.json())
      .then((data: { id: string }) => {
        alert(`Заявка отправлена! ID заявки: ${data.id}`);
      })
  }

  return <section className={classes.formSection} id="form">
    <Container>
      <h2 className={classes.title}>
        Отправь форму
      </h2>
      <form className={classes.form}>
        <div className={classes.formItem}>
          <Input
            value={name}
            onChange={setName}
            label="Имя"
          />
        </div>
        <div className={classes.formItem}>
          <Input
            value={phone}
            onChange={setPhone}
            label="Телефон"
          />
        </div>
        <div className={classes.formItem}>
          <Checkbox
            label={'Согласен, отказываюсь'}
            checked={isAgreed}
            onChange={setIsAgreed}
          />
        </div>
        <div className={classes.formItem}>
          <Button
            variant={'primary'}
            block={true}
            onClick={buttonClickHandler}
          >
            Отправить
          </Button>
        </div>
      </form>
    </Container>
  </section>
}