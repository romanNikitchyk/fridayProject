import React from 'react'
import { useNavigate } from 'react-router-dom'
import stl from '../../ForgotPassword/CheckMail/CheckMail.module.css'
import openLetter from '../../../../assets/images/openLetter.png'
import Button from '../../../../common/components/Button/Button'

export function CheckMail() {
  const navigate = useNavigate()
  const navToLogin = () => {
    navigate('/login')
  }
  return (
    <div className={stl.wrapper}>
      <h2 className={stl.title}>Check Mail</h2>
      <div className={stl.loginContainer}>
        <img src={openLetter} alt="Opened letter" />
        <p>We’ve sent an Email with instructions to Your mail</p>
        <Button className={stl.loginButton} onClick={navToLogin}>
          Back to Login
        </Button>
      </div>
    </div>
  )
}
