import {ReactNode} from 'react';
import classes from './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps {
  variant?: 'primary' | 'default',
  children: ReactNode
}

export const Button = (
  {
    variant = 'default',
    children
  }: ButtonProps
) => {
  return <button
    className={cn(classes.button, classes[variant])}
  >
    {children}
  </button>
}