import React from 'react'
import EditableSpan from '../../common/components/EditableSpan/EditableSpan'
import Button from '../../common/components/Button/Button'
import { logOut } from './profileReducer'
import { useAppDispatch, useAppSelector } from '../../common/hook/hook'
import style from '../profile/Profile.module.css'

export function Profile() {
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.profile.name)
  const userAvatar = useAppSelector((state) => state.profile.avatar)
  const userEmail = useAppSelector((state) => state.profile.email)

  const resetUserData = () => {
    dispatch(logOut())
  }

  return (
    <div className={style.profile}>
      <h2>Profile Page</h2>
      <img src={userAvatar} alt="avatar" />
      <div>
        <EditableSpan value={userName} />
      </div>
      <div>{userEmail}</div>
      <Button name={'logOut'} onClick={resetUserData} />
    </div>
  )
}
