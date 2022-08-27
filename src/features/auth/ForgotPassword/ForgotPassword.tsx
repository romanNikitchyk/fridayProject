import React from 'react'
import { useAppDispatch } from '../../../common/hook/hook'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import stl from '../Login/Login.module.css'
import Input from '../../../common/components/Input/Input'
import Button from '../../../common/components/Button/Button'
import { forgotPasswordTC } from './forgotReducer'
export type FormikDataType = {
  email?: string
}

export function ForgotPassword() {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: FormikDataType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(forgotPasswordTC(values))
      formik.resetForm()
    },
  })

  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Forgot Password</h2>
      <div className={stl.loginContainer}>
        <h3>Forgot your password?</h3>
        <form className={stl.loginForm} onSubmit={formik.handleSubmit}>
          <Input type="email" placeholder={'Email'} {...formik.getFieldProps('email')} />

          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
          <p>Write your Email and we will send you further instructions</p>

          <Button type="submit" className={stl.loginButton}>
            Submit your Email
          </Button>
        </form>
        <p>Did you remember your password?</p>
        <Link to={'/login'}>Try to logging in</Link>
      </div>
    </div>
  )
}
