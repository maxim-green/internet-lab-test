import classes from './App.module.scss';
import {MainSection} from '../sections/Main';

export const App = () => {
  return <div className={classes.app}>
    <MainSection/>
  </div>
}