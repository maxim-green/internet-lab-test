import {Card} from '../../../components/Card';
import classes from './Slider.module.scss';

interface SliderProps {
  slideWidth?: number
  slidesOnPage?: number
  slidesGap?: number
}

export const Slider = (
  {
    slideWidth = 340,
    slidesOnPage = 3,
    slidesGap = 32
  }: SliderProps
) => {
  const width = slideWidth * slidesOnPage + slidesGap * (slidesOnPage - 1);

  const data = [
    {
      id: '1',
      avatarUrl: 'assets/images/user-1.png',
      name: 'Константинов Михаил Павлович',
      location: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
    },
    {
      id: '2',
      avatarUrl: 'assets/images/user-2.png',
      name: 'Иван Иванов',
      location: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
    },
    {
      id: '3',
      avatarUrl: 'assets/images/user-3.png',
      name: 'Артем Корнилов',
      location: 'Самара',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
    }
  ]


  return <div className={classes.slider}>
    <div
      style={{ width }}
    >
      <ul
        className={classes.items}
        style={{
          gap: slidesGap
        }}
      >
        {
          data.map(item => (
            <li
              className={classes.item}
              key={item.id}
              style={{
                width: slideWidth
              }}
            >
              <Card>
                <header className={classes.itemHeader}>
                  <img src={item.avatarUrl} alt={`user-${item.id}`}/>
                  <div>
                    <h6 className={classes.itemTitle}>
                      {item.name}
                    </h6>
                    <p className={classes.itemSubtitle}>
                      {item.location}
                    </p>
                  </div>
                </header>
                <p className={classes.itemText}>
                  {item.text}
                </p>
              </Card>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
}