import React from 'react'
import stl from './Error.module.css'
export type ErrorPropsType = {
  text: string
}

const Error = (props: ErrorPropsType) => {
  return (
    <div>
      <button className={stl.ErrorButton}>{props.text}</button>
    </div>
  )
}

export default Error
