import {ReactNode} from 'react';
import classes from './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps {
  type?: 'submit' | 'button'
  variant?: 'primary' | 'default',
  block?: boolean
  onClick?: () => void
  children: ReactNode
}

export const Button = (
  {
    variant = 'default',
    type = 'button',
    block,
    onClick,
    children
  }: ButtonProps
) => {
  return <button
    type={type}
    className={cn(classes.button, classes[variant], block && classes.block)}
    onClick={onClick}
  >
    {children}
  </button>
}