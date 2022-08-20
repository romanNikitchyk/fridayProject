import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react'
import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type PropsType = DefaultInputPropsType & {
  error?: string
  errorClassName?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
}

const Input: FC<PropsType> = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  className,
  error,
  errorClassName,
  ...restProps
}) => {
  const finalClassName = `${s.default} ${className}`
  const finalErrorClassName = `${s.errorDefault} ${errorClassName}`

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  return (
    <>
      <input
        type={type}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        className={finalClassName}
        {...restProps}
      />
      {error && <div className={finalErrorClassName}>{error}</div>}
    </>
  )
}

export default Input
