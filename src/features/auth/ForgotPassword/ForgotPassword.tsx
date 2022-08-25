import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { InitAppTC } from '../authReducer'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import stl from '../Login/Login.module.css'
import Input from '../../../common/components/Input/Input'
import Button from '../../../common/components/Button/Button'
type FormikErrorType = {
  email?: string
}

export function ForgotPassword() {
  const isInit = useAppSelector((state) => state.auth.isInitialized)
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(InitAppTC())
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
    onSubmit: (values) => {
      formik.resetForm()
    },
  })

  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Forgot Password</h2>
      <div className={stl.loginContainer}>
        <h3>Forgot your password?</h3>
        <form className={stl.loginForm} onSubmit={formik.handleSubmit}>
          <label htmlFor="email"></label>

          <Input id="email" type="email" placeholder={'Email'} {...formik.getFieldProps('email')} />

          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
          <p>Write your Email and we will send you futher instructions</p>

          <Button type="submit" className={stl.loginButton} name={'Submit your Email'} />
        </form>
        <p>Did you remember your password?</p>
        <Link to={'/login'}>Try to logging in</Link>
      </div>
    </div>
  )
}
