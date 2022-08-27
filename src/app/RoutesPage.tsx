import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth/Login/Login'
import { Register } from '../features/auth/Register/Register'
import { Profile } from '../features/profile/Profile'
import { ForgotPassword } from '../features/auth/ForgotPassword/ForgotPassword'
import { NewPassword } from '../features/auth/NewPassword/NewPassword'
import { PageNotFound } from '../common/components/PageNotFound/PageNotFound'
import { Test } from '../features/Test'

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />

      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/profile'} element={<Profile />} />

      <Route path={'/recovery'} element={<ForgotPassword />} />
      <Route path={'/set-new-password'} element={<NewPassword />} />

      <Route path={'/*'} element={<PageNotFound />} />
      <Route path={'/test'} element={<Test />} />
    </Routes>
  )
}
