import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC } from '../packsReducer'
import TableBody from './TableBody'
import stl from './PackTable.module.css'

const PackTable = () => {
  const dispatch = useAppDispatch()
  const cardPacks = useAppSelector((state) => state.packs.cardPacks)
  const params = { pageCount: 10 }
  useEffect(() => {
    dispatch(getPacksTC(params))
  }, [])
  return (
    <div className={stl.wrapper}>
      <table className={stl.allTable}>
        <thead className={stl.tableHead}>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last updated</th>
            <th>Created by</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cardPacks.map((el) => {
            return (
              <TableBody
                key={el._id}
                packId={el._id}
                name={el.name}
                cards={el.cardsCount}
                updated={el.updated}
                created={el.user_name}
                packUserId={el.user_id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PackTable
