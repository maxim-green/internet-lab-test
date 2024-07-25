import classes from './Input.module.scss';

interface InputProps {
  value: string
  onChange: (value: string) => void
  label?: string
}

export const Input = (
  {
    value,
    onChange,
    label
  }: InputProps
) => {
  return <div className={classes.input}>
    <label className={classes.wrapper}>
      <div className={classes.label}>{label}</div>
      <input type="text"/>
    </label>
    <div className={classes.helper}>
      helperText
    </div>
  </div>
}