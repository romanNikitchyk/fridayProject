import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  FocusEvent,
  MouseEvent,
  useState,
} from 'react'
import s from './EditableSpan.module.css'
import Input from '../Input/Input'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type PropsType = Omit<DefaultInputPropsType, 'type' | 'placeholder'> & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: boolean
  errorText?: string

  spanClassName?: string
  spanProps?: DefaultSpanPropsType
}

const EditableSpan: FC<PropsType> = ({
  autoFocus,
  onBlur,
  onEnter,
  spanProps,

  ...restProps
}) => {
  const [editMode, setEditMode] = useState(false)
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {}

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setEditMode(false)
    onBlur && onBlur(e)
  }

  const onEnterHandler = () => {
    setEditMode(false)
    onEnter && onEnter()
  }

  const onDoubleClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
    setEditMode(true)
    onDoubleClick && onDoubleClick(e)
  }

  const spanClassName = `${s.default} ${className}`

  return (
    <>
      {editMode ? (
        <Input autoFocus onBlur={onBlurHandler} onEnter={onEnterHandler} {...restProps} />
      ) : (
        <span onDoubleClick={onDoubleClickHandler} className={spanClassName} {...restSpanProps}>
          {children || restProps.value}
        </span>
      )}
    </>
  )
}

export default EditableSpan
