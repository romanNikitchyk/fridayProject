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
    <tr>
      <td className={stl.tableName}>{props.name}</td>
      <td className={stl.tableCards}>{props.cards}</td>
      <td className={stl.tableUpd}>{props.updated}</td>
      <td className={stl.tablecreated}>{props.created}</td>
      <td className={stl.tableAction}>Actions</td>
    </tr>
  )
}

export default TableBody
