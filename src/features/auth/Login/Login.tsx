import React from 'react'
import stl from './Login.module.css'
import { useFormik } from 'formik'
import Input from '../../../common/components/Input/Input'
type FormikErrorType = {
  email?: string
  password?: string
}

export function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 3) {
        errors.password = 'Password should be at least 3 simbols'
      }
      return errors
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      formik.resetForm()
    },
  })
  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Login Page</h2>
      <div className={stl.loginContainer}>
        <h3>It-incubator</h3>
        <h4>Sign IN</h4>
        <form className={stl.loginForm} onSubmit={formik.handleSubmit}>
          <label htmlFor="email"></label>

          <Input id="email" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password"></label>
          <Input id="password" type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
