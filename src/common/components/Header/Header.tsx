import React from 'react'
import logo from './../../../assets/images/logo.png'
import avatar from './../../../assets/images/avatar.png'
import styles from './Header.module.css'
import { useAppSelector } from '../../hook/hook'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const userAvatar = useAppSelector((state) => state.profile.avatar)
  const userName = useAppSelector((state) => state.profile.name)

  const onSignInClickHandler = () => {
    navigate('/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <Link to={'/'} className={styles.logoLink}>
            <img src={logo} alt="logotype" />
          </Link>
        </div>
        <div className={styles.user}>
          {isLoggedIn ? (
            <>
              <span className={styles.name}>{userName}</span>
              <div className={styles.wrapAvatar}>
                <img src={userAvatar ? userAvatar : avatar} alt="avatar" />
              </div>
            </>
          ) : (
            <Button onClick={onSignInClickHandler}>Sign in</Button>
          )}
        </div>
      </div>
    </header>
  )
}
