import classes from './MainSection.module.scss';
import {Button} from '../../components/Button';

export const MainSection = () => {
  return <div className={classes.mainSection}>
    <Button>
      Проще простого!
    </Button>
  </div>
}