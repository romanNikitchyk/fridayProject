import React from 'react'
import photo from './spinner.svg'
import style from './Preloader.module.css'

const Preloader = () => {
  return <img className={style.photo} src={photo}></img>
}

export default Preloader
