import React from 'react'
import Input from '../components/Input/Input'

type PropsType = {
  name: string
  formik: any
  type: string
}
type formikPropsType = {}
export const MyTextField = ({ name, formik, type }: PropsType) => {
  return (
    <label htmlFor={name}>
      <Input id={name} type={type} {...formik.getFieldProps(name)} />
      {formik.touched[name] && formik.errors[name] && (
        <div style={{ color: 'red' }}>{formik.errors[name]}</div>
      )}
    </label>
  )
}
