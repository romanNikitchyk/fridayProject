import React from 'react'
import stl from './PackTable.module.css'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch } from '../../../common/hook/hook'
import { getCardsTC } from '../../Cards/cardsReducer'
import { useNavigate } from 'react-router-dom'

export type TableBodyProps = {
  packId: string
  name: string
  cards: number
  updated: string
  created: string
  packUserId: string
}

const TableBody = (props: TableBodyProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cardsPack_id = props.packId
  const action = () => {
    dispatch(getCardsTC({ cardsPack_id }))
    navigate('/Cards')
  }

  return (
    <tr>
      <td className={stl.tableName}>{props.name}</td>
      <td className={stl.tableCards}>{props.cards}</td>
      <td className={stl.tableUpd}>{props.updated}</td>
      <td className={stl.tablecreated}>{props.created}</td>
      <td className={stl.tableAction}>
        <Button onClick={action}>Action</Button>
      </td>
    </tr>
  )
}

export default TableBody
