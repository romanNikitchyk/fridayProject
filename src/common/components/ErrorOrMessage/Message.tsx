import React from 'react'
import stl from './Message.module.css'
export type MessagePropsType = {
  text: string
}

const Message = (props: MessagePropsType) => {
  return (
    <div>
      <button className={stl.MessageButton}>{props.text}</button>
    </div>
  )
}

export default Message
