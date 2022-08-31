import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth/Login/Login'
import { Register } from '../features/auth/Register/Register'
import { Profile } from '../features/Profile/Profile'
import { ForgotPassword } from '../features/auth/ForgotPassword/ForgotPassword/ForgotPassword'
import { PageNotFound } from '../common/components/PageNotFound/PageNotFound'
import { Test } from '../features/Test'
import { CheckMail } from '../features/auth/ForgotPassword/CheckMail/CheckMail'
import { SetNewPassword } from '../features/auth/ForgotPassword/SetNewPassword/SetNewPassword'

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />

      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/Profile'} element={<Profile />} />

      <Route path={'/recovery'} element={<ForgotPassword />} />
      <Route path={'/check-mail'} element={<CheckMail />} />
      <Route path={'/set-new-password/:token'} element={<SetNewPassword />} />

      <Route path={'/*'} element={<PageNotFound />} />
      <Route path={'/test'} element={<Test />} />
    </Routes>
  )
}
