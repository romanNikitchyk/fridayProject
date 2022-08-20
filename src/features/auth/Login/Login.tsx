import React from 'react'
import stl from './Login.module.css'
import { useFormik } from 'formik'
import Input from '../../../common/components/Input/Input'

export function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password"></label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
