import React from 'react'
import styles from './Login.module.css'
import { useFormik } from 'formik'
import Input from '../../../common/components/Input/Input'
import { loginTC } from './loginReducer'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import Checkbox from '../../../common/components/Checkbox/Checkbox'
import Preloader from '../../../common/components/Preloader/Preloader'
import { MyTextField } from '../../../common/utils/formik-util'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: false
}

export function Login() {
  const isInit = useAppSelector((state) => state.auth.isInitialized)
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

  if (isLoggedIn && isInit) {
    return <Navigate to={'/Profile'} />
  }

  if (!isInit) {
    return <Preloader />
  }

  return (
    <div className={styles.login}>
      <div className={styles.cardLogin}>
        <h2 className={styles.title}>Sign in</h2>
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
          <Input
            className={styles.wrapInput}
            type="email"
            placeholder={'email'}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}

          <MyTextField className={styles.wrapInput} name={'password'} formik={formik} />
          <div className={styles.wrapCheckbox}>
            <Checkbox {...formik.getFieldProps('rememberMe')}>Remember me</Checkbox>
          </div>
          <div className={styles.wrapForgotLink}>
            <Link to={'recovery'}>Forgot Password?</Link>
          </div>
          <div className={styles.wrapSignIn}>
            <Button type="submit" className={styles.loginButton}>
              Sign In
            </Button>
          </div>
          <p className={styles.text}>Already have an account?</p>
          <div className={styles.wrapRegister}>
            <Link to={'/register'}>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
