import React from 'react'
import stl from './CardsTable.module.css'

export type TableBodyProps = {
  cardsPackId: string
  question: string
  answer: string
  updated: string
  grade: number
  packUserId: string
}

const CardsTableBody = (props: TableBodyProps) => {
  return (
    <tr>
      <td className={stl.question}>{props.question}</td>
      <td className={stl.answer}>{props.answer}</td>
      <td className={stl.updated}>{props.updated}</td>
      <td className={stl.grade}>{props.grade}</td>
    </tr>
  )
}

export default CardsTableBody
