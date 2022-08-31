import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  FocusEvent,
  useState,
} from 'react'
import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type PropsType = Omit<DefaultInputPropsType, 'type' | 'placeholder'> & {
  placeholder?: string
  type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
  error?: boolean
  errorText?: string
  errorClassName?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
}
const Input: FC<PropsType> = ({
  type,
  onChange,
  onBlur,
  onFocus,
  value,
  onChangeText,
  onKeyPress,
  onEnter,
  className,
  error,
  errorText,
  placeholder,
  errorClassName,
  ...restProps
}) => {
  const finalClassName = `${s.wrap} ${className}`
  const finalErrorClassName = `${s.errorDefault} ${errorClassName}`

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e)
    setHasFocus(true)
  }

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e)
    setHasFocus(false)
  }

  const [hasFocus, setHasFocus] = useState(false)

  return (
    <div className={finalClassName}>
      <input
        type={type}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        className={s.default}
        value={value}
        {...restProps}
      />
      <span className={value || hasFocus ? `${s.placeholder} ${s.up}` : s.placeholder}>
        {placeholder}
      </span>
      {error && <div className={finalErrorClassName}>{errorText}</div>}
    </div>
  )
}

export default Input
