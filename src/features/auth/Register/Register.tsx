import React from 'react'
import Input from '../../../common/components/Input/Input'
import { Link, Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { signUpTC } from './registerReducer'

import Button from '../../../common/components/Button/Button'

type FormikErrorType = {
  email?: string
  password?: string
  confirmPassword?: string
}

export function Register() {
  const isRegister = useAppSelector((state) => state.register.isRegister)
  const dispatch = useAppDispatch()

  // ! Задизейблить кнопку и поля во время запроса
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: (values) => {
      const errors: FormikErrorType = {}

      if (!values.email) {
        errors.email = 'Empty field!'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address!'
      }

      if (!values.password) {
        errors.password = 'Empty field!'
      } else if (!/^[A-Z0-9._%+-]{8,32}$/i.test(values.password)) {
        errors.password = 'Password must be more than 7 characters!'
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Empty field!'
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Invalid password'
      }
      return errors
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      dispatch(signUpTC(values.email, values.password))
      formik.resetForm()
    },
  })

  if (isRegister) {
    return <Navigate to={'/login'} />
    // Нужно ли диспатчить обратно на false?
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <Input type={'email'} placeholder={'Email'} {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <Input type={'password'} placeholder={'Password'} {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>

        <div>
          <Input
            type={'password'}
            placeholder={'confirm Password'}
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <div>
          <Button type={'submit'} name={'Sign Up'} />
          {/*<button type={'submit'}>Sign Up</button>*/}
        </div>

        <p>Already have an account?</p>
        <div>
          <Link to={'/login'}>Sign In</Link>
        </div>
      </form>
    </div>
  )
}
