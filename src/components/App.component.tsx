import classes from './App.module.scss';
import {MainSection} from '../sections/Main';
import {HowItWorksSection} from '../sections/HowItWorks';
import {ThirdBlockSection} from '../sections/ThirdBlock';
import {ReviewsSection} from '../sections/Reviews';
import {QuestionsAndAnswersSection} from '../sections/QuestionsAndAnswers';
import {FeaturesSection} from '../sections/Features';
import {FormSection} from '../sections/Form';
import {FooterSection} from '../sections/Footer';

export const App = () => {
  return <div className={classes.app}>
    <MainSection/>
    <HowItWorksSection/>
    <ThirdBlockSection/>
    <ReviewsSection/>
    <QuestionsAndAnswersSection/>
    <FeaturesSection/>
    <FormSection/>
    <FooterSection/>
  </div>
}