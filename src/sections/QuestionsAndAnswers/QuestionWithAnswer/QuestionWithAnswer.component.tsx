import {useState} from 'react';
import {Icon} from '../../../components/Icon';
import classes from './QuestionWithAnswer.module.scss';

interface QuestionWithAnswerProps {
  question: string,
  answer: string,
  opened: boolean
}

export const QuestionWithAnswer = (
  {
    question,
    answer
  }: QuestionWithAnswerProps
) => {
  const [opened, setOpened] = useState(true);
  const [answerHeight, setAnswerHeight] = useState<number>();

  const answerRef = (node: HTMLDivElement | null) => {
    if (node && !answerHeight) {
      setAnswerHeight(node.offsetHeight);
      setOpened(false);
    }
  }

  return <div className={classes.questionWithAnswer}>
    <button
      className={classes.questionButton}
      onClick={() => setOpened((opened) => !opened)}
    >
      {question}
      <div>
        <Icon iconId={opened ? 'circle-x' : 'circle-plus'}/>
      </div>
    </button>
    <div
      className={classes.answer}
      ref={answerRef}
      style={{
        height: opened ? answerHeight : 0
      }}
    >
      {answer}
    </div>
  </div>
}