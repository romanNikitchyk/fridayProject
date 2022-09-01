import React, { useState } from 'react'
import EditableSpan from '../../common/components/EditableSpan/EditableSpan'
import Button from '../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../common/hook/hook'
import style from '../Profile/Profile.module.css'
import { Link, Navigate } from 'react-router-dom'
import { setIsLoggedInAC } from '../auth/Login/loginReducer'
import Preloader from '../../common/components/Preloader/Preloader'
import { changeNameUserTC, logOutTC } from './profileReducer'
import avatar from '../../assets/images/avatar.png'

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
  }
  if (!isLoggedIn) {
    return <Navigate to={'/'} />
  }
  if (!isInit) {
    return <Preloader />
  }

  const changePhotoHandler = () => {
    console.log('changePhotoHandler')
  }

  return (
    <div className={style.profile}>
      <Link className={style.link} to={'/Packs'}>
        Back to Packs List
      </Link>
      <div className={style.cardProfile}>
        <h3 className={style.title}>Profile Page</h3>
        <div className={style.wrapAvatar}>
          <img src={userAvatar ? userAvatar : avatar} alt="avatar" />
          <button className={style.addPhotoBtn} onClick={changePhotoHandler} />
        </div>
        <div className={style.body}>
          <EditableSpan
            wrapClassName={style.editableSpan}
            value={currentValue}
            onClickButton={() => {
              changeNameUserTC(currentValue)
            }}
            onChangeText={setCurrentValue}
          />
          <div className={style.email}>{userEmail}</div>
          <Button className={style.submit} onClick={resetUserData}>
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}
