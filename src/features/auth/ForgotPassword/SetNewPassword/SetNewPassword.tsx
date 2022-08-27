import React from 'react'
import { useAppDispatch } from '../../../../common/hook/hook'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import stl from '../../ForgotPassword/ForgotPassword/ForgotPassword.module.css'
import Button from '../../../../common/components/Button/Button'
import { newPasswordTC } from '../forgotReducer'
import { InputPass } from '../../../../common/components/InputPass/InputPass'
export type FormikDataType = {
  password?: string
}

export function SetNewPassword() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const resetPasswordToken = params.token

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: (values) => {
      const errors: FormikDataType = {}
      if (!values.password) {
        errors.password = 'Required'
      } else if (!/^[A-Z0-9._%+-]{8,32}$/i.test(values.password)) {
        errors.password = 'Password must be more than 7 characters!'
      }
      return errors
    },
    onSubmit: (values) => {
      if (resetPasswordToken) {
        dispatch(newPasswordTC(values.password, resetPasswordToken))
      }
      formik.resetForm()
      navigate('/login')
    },
  })

  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>New Password</h2>
      <div className={stl.loginContainer}>
        <h3>Create new password</h3>
        <form className={stl.loginForm} onSubmit={formik.handleSubmit}>
          <InputPass placeholder={'Password'} {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
          <p>Create new password and we will send you further instructions to email</p>

          <Button type="submit" className={stl.loginButton}>
            Create new password
          </Button>
        </form>
      </div>
    </div>
  )
}
