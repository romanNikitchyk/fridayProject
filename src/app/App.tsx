import React, { useEffect } from 'react'
import { initAppTC } from '../features/auth/authReducer'
import { useAppDispatch } from '../common/hook/hook'
import { RoutesPage } from './RoutesPage'
import { Header } from '../common/components/Header/Header'
import { TestHeader } from '../TestHeader'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAppTC())
  }, [])

  return (
    <div className="App">
      <Header />
      <TestHeader />
      <div className="container">
        <RoutesPage />
      </div>
    </div>
  )
}

export default App
