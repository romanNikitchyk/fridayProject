import React, { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import s from './InputRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type PropsType = DefaultInputPropsType & {
  onChangeRange?: (value: number) => void
}

const InputRange: FC<PropsType> = ({ type, onChange, onChangeRange, className, ...restProps }) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeRange && onChangeRange(+e.currentTarget.value)
  }

  const finalClassName = `${s.range} ${className}`

  return (
    <>
      <input type={'range'} onChange={onChangeCallback} className={finalClassName} {...restProps} />
    </>
  )
}

export default InputRange
