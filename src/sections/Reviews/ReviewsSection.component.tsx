import classes from './ReviewsSection.module.scss';
import {Container} from '../../components/Container';

export const ReviewsSection = () => {
  return <section className={classes.reviewsSection}>
    <Container>
      <h2 className={classes.title}>
        Отзывы
      </h2>
      <div>
        Reviews slider will be here
      </div>
    </Container>
  </section>
}