import React from 'react'

export type TableBodyProps = {
  packId: string
  name: string
  cards: number
  updated: string
  created: string
  packUserId: string
}

const TableBody = (props: TableBodyProps) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cards}</td>
      <td>{props.updated}</td>
      <td>{props.created}</td>
      <td>Actions</td>
    </tr>
  )
}

export default TableBody
