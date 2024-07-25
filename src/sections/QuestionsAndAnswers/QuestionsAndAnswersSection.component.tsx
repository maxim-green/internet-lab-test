import classes from './QuestionsAndAnswersSection.module.scss';
import {Container} from '../../components/Container';

export const QuestionsAndAnswersSection = () => {
  return <section className={classes.questionsAndAnswersSection}>
    <Container>
      <h2 className={classes.title}>
        Вопросы и ответы
      </h2>
      <div>
        Questions and answers will be here
      </div>
    </Container>
  </section>
}