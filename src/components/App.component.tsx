import classes from './App.module.scss';
import {MainSection} from '../sections/Main';
import {HowItWorksSection} from '../sections/HowItWorks';
import {ThirdBlockSection} from '../sections/ThirdBlock';

export const App = () => {
  return <div className={classes.app}>
    <MainSection/>
    <HowItWorksSection/>
    <ThirdBlockSection/>
  </div>
}