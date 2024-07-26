import classes from './Card.module.scss';
import {ReactNode} from 'react';

interface CardProps {
  children: ReactNode
}

export const Card = (
  {
    children
  }: CardProps
) => {
  return <div className={classes.card}>
    {children}
  </div>
}