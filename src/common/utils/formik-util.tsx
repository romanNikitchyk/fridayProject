import React from 'react'
import Input from '../components/Input/Input'
import { InputPass } from '../components/InputPass/InputPass'

type PropsType = {
  name: string
  formik: any
}
export const MyTextField = ({ name, formik }: PropsType) => {
  return (
    <>
      <InputPass placeholder={name} {...formik.getFieldProps(name)} />
      {formik.touched[name] && formik.errors[name] && (
        <div style={{ color: 'red' }}>{formik.errors[name]}</div>
      )}
    </>
  )
}
