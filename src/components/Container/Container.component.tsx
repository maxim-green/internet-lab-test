import {ReactNode} from 'react';
import classes from './Container.module.scss';
import cn from 'classnames';

export interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container = (
  {
    className,
    children
  }: ContainerProps
) => {
  return <div className={cn(classes.container, className)}>
    {children}
  </div>
}