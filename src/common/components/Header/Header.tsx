import React from 'react'
import logo from './../../../assets/images/logo.png'
import avatar from './../../../assets/images/avatar.png'
import styles from './Header.module.css'
import { useAppSelector } from '../../hook/hook'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../ErrorOrMessage/Error'
import Message from '../ErrorOrMessage/Message'

export const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const userAvatar = useAppSelector((state) => state.profile.avatar)
  const userName = useAppSelector((state) => state.profile.name)
  const error = useAppSelector((state) => state.auth.error)
  const errorText = useAppSelector((state) => state.auth.errorText)
  const message = useAppSelector((state) => state.auth.message)
  const messageText = useAppSelector((state) => state.auth.messageText)

  const onSignInClickHandler = () => {
    navigate('/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        {error && <Error text={errorText} />}
        {message && <Message text={messageText} />}
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
