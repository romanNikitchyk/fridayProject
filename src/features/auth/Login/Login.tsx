import React from 'react'
import stl from './Login.module.css'
import { useFormik } from 'formik'
import { loginTC } from './loginReducer'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { MyTextField } from '../../../common/utils/formik-util'

type FormikErrorType = {
  email?: string
  password?: string
}

export function Login() {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
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
      } else if (!/^[A-Z0-9._%+-]{8,32}$/i.test(values.password)) {
        errors.password = 'Password must be more than 7 characters!'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(loginTC(values))
      formik.resetForm()
    },
  })

  if (isLoggedIn) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Login Page</h2>
      <div className={stl.loginContainer}>
        <h3>It-incubator</h3>
        <h4>Sign IN</h4>
        <form className={stl.loginForm} onSubmit={formik.handleSubmit}>
          {/*  <label htmlFor="email">
            <Input id="email" type="email" {...formik.getFieldProps('email')} />

            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            )}
          </label>*/}
          <MyTextField type="text" name={'email'} formik={formik} />
          <MyTextField type="password" name={'password'} formik={formik} />
          {/* <label htmlFor="password">
            <Input id="password" type="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            )}
          </label>*/}

          <a className={stl.forgotLink}>Forgot Password?</a>
          <Button type="submit" className={stl.loginButton} name={'Login'} />
        </form>
        <p>Don`t have an account?</p>
        <Link to={'/register'}>Sign Up</Link>
      </div>
    </div>
  )
}
