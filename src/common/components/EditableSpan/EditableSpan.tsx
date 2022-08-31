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
  onClickButton?: () => void
  onEnter?: () => void
  error?: boolean
  errorText?: string
  wrapClassName?: string

  spanClassName?: string
  spanProps?: DefaultSpanPropsType
}

const EditableSpan: FC<PropsType> = ({
  autoFocus,
  wrapClassName,
  onClickButton,
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

  const onClickButtonHandler = () => {
    setEditMode(false)
    onClickButton && onClickButton()
  }

  const spanClassName = `${s.default} ${className}`
  const totalWrapClassName = `${s.wrapDefault} ${wrapClassName}`

  return (
    <div className={totalWrapClassName}>
      {editMode ? (
        <div className={s.wrap}>
          <Input autoFocus onBlur={onBlurHandler} onEnter={onEnterHandler} {...restProps} />
          <button onClick={onClickButtonHandler} className={s.saveBtn}>
            SAVE
          </button>
        </div>
      ) : (
        <span onDoubleClick={onDoubleClickHandler} className={spanClassName} {...restSpanProps}>
          {children || restProps.value}
        </span>
      )}
    </div>
  )
}

export default EditableSpan
