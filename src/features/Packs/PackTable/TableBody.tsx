import React from 'react'
import stl from './PackTable.module.css'

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
    <tr className={stl.tableData}>
      <td>{props.name}</td>
      <td>{props.cards}</td>
      <td>{props.updated}</td>
      <td>{props.created}</td>
      <td>Actions</td>
    </tr>
  )
}

export default TableBody
