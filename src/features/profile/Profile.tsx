import React, { useState } from 'react'
import EditableSpan from '../../common/components/EditableSpan/EditableSpan'
import Button from '../../common/components/Button/Button'
import { changeNameUserTC, logOutTC } from './profileReducer'
import { useAppDispatch, useAppSelector } from '../../common/hook/hook'
import style from '../profile/Profile.module.css'
import { Navigate } from 'react-router-dom'
import { setIsLoggedInAC } from '../auth/Login/loginReducer'
import { setAppIsInitAC } from '../auth/authReducer'
import Preloader from '../../common/components/Preloader/Preloader'

export function Profile() {
  const isInit = useAppSelector((state) => state.auth.isInitialized)
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.profile.name)
  const userAvatar = useAppSelector((state) => state.profile.avatar)
  const userEmail = useAppSelector((state) => state.profile.email)
  const [currentValue, setCurrentValue] = useState(userName)
  const resetUserData = () => {
    dispatch(logOutTC())
    dispatch(setIsLoggedInAC(false))
    dispatch(setAppIsInitAC(false))
  }
  if (!isLoggedIn) {
    return <Navigate to={'/'} />
  }
  if (!isInit) {
    return <Preloader />
  }

  return (
    <div className={style.profile}>
      <h2>Profile Page</h2>
      <img src={userAvatar} alt="avatar" />
      <div>
        <EditableSpan
          value={currentValue}
          onClickButton={() => {
            changeNameUserTC(currentValue)
          }}
          onChangeText={setCurrentValue}
        />
      </div>
      <div>{userEmail}</div>
      <Button onClick={resetUserData}>logOut</Button>
    </div>
  )
}
