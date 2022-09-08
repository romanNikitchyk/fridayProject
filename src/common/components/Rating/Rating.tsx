import React, { useState } from 'react'
import styles from './Rating.module.css'

type PropsType = {
  value: number
  onChangeRate?: (value: number) => void
  width?: string
  height?: string
  className?: string
}

export const Rating: React.FC<PropsType> = ({
  value,
  onChangeRate,
  width = '14',
  height = '13',
  className,
}) => {
  const rating = []
  const isInt = Number.isInteger(value)
  const id = React.useId()

  const onClickHandler = (value: number) => {
    onChangeRate && onChangeRate(value)
  }

  const [hover, setHover] = useState(0)

  for (let i = 1; i <= 5; i++) {
    rating.push(
      <svg
        key={i}
        width={width}
        height={height}
        className={`${styles.star} ${i <= value ? styles.active : ''} ${
          i <= hover ? styles.hover : ''
        }`}
        onClick={() => {
          onClickHandler(i)
        }}
        onMouseEnter={() => {
          setHover(i)
        }}
        onMouseLeave={() => {
          setHover(0)
        }}
      >
        <use
          xlinkHref="#star"
          fill={`${!isInt && Math.ceil(value) === i && !(i <= hover) ? `url(#${id}-half)` : ''}`}
        ></use>
      </svg>
    )
  }
  const percent = Math.ceil((value - Math.floor(value)) * 100)
  const finalClassName = `${styles.rateWrap} ${className ? className : ''}`

  return (
    <div className={finalClassName}>
      <svg width="0" height="0">
        <linearGradient id={`${id}-half`} x1="0" x2="100%" y1="0" y2="0">
          <stop offset={`${percent}%`} stopColor="#ffc700"></stop>
          <stop offset={`${percent}%`} stopColor="#dadada"></stop>
        </linearGradient>

        <symbol viewBox="0 0 14 13" id="star">
          <path d="M6.524.464a.5.5 0 01.952 0l1.208 3.718a.5.5 0 00.475.346h3.91a.5.5 0 01.294.904L10.2 7.731a.5.5 0 00-.182.559l1.209 3.719a.5.5 0 01-.77.559l-3.163-2.299a.5.5 0 00-.588 0l-3.163 2.299a.5.5 0 01-.77-.56L3.982 8.29a.5.5 0 00-.182-.56L.636 5.433a.5.5 0 01.294-.904h3.91a.5.5 0 00.476-.346L6.524.464z" />
        </symbol>
      </svg>
      <span>{rating}</span>
    </div>
  )
}
