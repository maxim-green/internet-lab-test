import classes from './ReviewsSection.module.scss';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';
import {Slider} from './Slider';

export const ReviewsSection = () => {
  return <section className={classes.reviewsSection}>
    <Container>
      <h2 className={classes.title}>
        Отзывы
      </h2>
      <Slider/>
    </Container>
  </section>
}