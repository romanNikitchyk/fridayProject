import React, { FC } from 'react'
import spinner from './spinner.svg'
import style from './Preloader.module.css'

type PropsType = {
  className?: string
}

const Preloader: FC<PropsType> = ({ className }) => {
  const totalClassName = `${style.spinner} ${className}`

  return (
    <div className={totalClassName}>
      <img src={spinner} alt={'loading'} />
    </div>
  )
}

export default Preloader
