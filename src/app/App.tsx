import React, { useEffect } from 'react'
import { TestHeader } from '../TestHeader'
import { initAppTC } from '../features/auth/authReducer'
import { useAppDispatch } from '../common/hook/hook'
import { RoutesPage } from './RoutesPage'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAppTC())
  }, [])

  return (
    <div className="App">
      <TestHeader />
      <RoutesPage />
    </div>
  )
}

export default App
