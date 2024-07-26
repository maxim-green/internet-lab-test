import classes from './Input.module.scss';
import {useState} from "react";
import cn from "classnames";

interface InputProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  helperText?: string
  invalid?: boolean
}

export const Input = (
  {
    value,
    onChange,
    label,
    placeholder,
    helperText,
      invalid
  }: InputProps
) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelActive = isFocused || value || placeholder;

  return <div className={cn(classes.input, isFocused && classes.focused, invalid && classes.invalid, value && classes.filled)}>
    <label className={classes.wrapper}>
      <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
      />
      <div className={cn(classes.label, labelActive && classes.active)}>
        {label}
      </div>
    </label>
    {helperText && <div className={classes.helper}>
      helperText
    </div>}
  </div>
}