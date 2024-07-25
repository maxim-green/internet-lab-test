import classes from './App.module.scss';
import {MainSection} from '../sections/Main';
import {HowItWorksSection} from '../sections/HowItWorks';
import {ThirdBlockSection} from '../sections/ThirdBlock';
import {ReviewsSection} from '../sections/Reviews';
import {QuestionsAndAnswersSection} from '../sections/QuestionsAndAnswers';

export const App = () => {
  return <div className={classes.app}>
    <MainSection/>
    <HowItWorksSection/>
    <ThirdBlockSection/>
    <ReviewsSection/>
    <QuestionsAndAnswersSection/>
  </div>
}