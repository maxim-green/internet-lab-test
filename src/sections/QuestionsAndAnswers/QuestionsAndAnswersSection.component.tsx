import classes from './QuestionsAndAnswersSection.module.scss';
import {Container} from '../../components/Container';
import {QuestionWithAnswer} from './QuestionWithAnswer';

export const QuestionsAndAnswersSection = () => {
  return <section className={classes.questionsAndAnswersSection} id="questions-and-answers">
    <Container>
      <h2 className={classes.title}>
        Вопросы и ответы
      </h2>
      <div>
        <QuestionWithAnswer
          opened={true}
          question="Частокол на границе продолжает удивлять?"
          answer="В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."
        />
      </div>
    </Container>
  </section>
}