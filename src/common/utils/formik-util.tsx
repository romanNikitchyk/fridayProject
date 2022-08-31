import React from 'react'
import { InputPass, PropsType } from '../components/InputPass/InputPass'

type MyTextFieldPropsType = {
  name: string
  formik: any
} & PropsType
export const MyTextField = ({ name, formik, ...restProps }: MyTextFieldPropsType) => {
  return (
    <>
      <InputPass placeholder={name} {...formik.getFieldProps(name)} {...restProps} />
      {formik.touched[name] && formik.errors[name] && (
        <div style={{ color: 'red' }}>{formik.errors[name]}</div>
      )}
    </>
  )
}
