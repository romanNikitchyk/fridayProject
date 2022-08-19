import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Main } from '../features/Main'
import { Login } from '../features/auth/Login'
import { Register } from '../features/auth/Register'
import { Profile } from '../features/profile/Profile'
import { Recovery } from '../features/auth/Recovery'
import { NewPass } from '../features/auth/NewPass'
import { NotFound } from '../features/NotFound'
import { Test } from '../features/Test'
import { TestHeader } from '../TestHeader'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main />} />

        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/profile'} element={<Profile />} />

        <Route path={'/recovery'} element={<Recovery />} />
        <Route path={'/new-pass'} element={<NewPass />} />

        <Route path={'/*'} element={<NotFound />} />
        <Route path={'/test'} element={<Test />} />
      </Routes>

      <TestHeader />
    </div>
  )
}

export default App
