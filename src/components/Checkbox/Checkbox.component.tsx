import classes from './Checkbox.module.scss';
import {Icon} from '../Icon';
import cn from 'classnames';

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export const Checkbox = (
  {
    checked,
    onChange,
    label
  }: CheckboxProps
) => {
  return <label className={cn(classes.checkbox, checked && classes.checked)}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.currentTarget.checked)}
    />
    <div className={classes.box}>
      <div className={classes.check}>
        <Icon iconId="check" />
      </div>
    </div>
    <div className={classes.label}>
      {label}
    </div>
  </label>
}