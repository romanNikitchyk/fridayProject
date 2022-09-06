import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC, setPacksAC } from '../packsReducer'
import TableBody from './TableBody'
import stl from './PackTable.module.css'
import { SettingsBar } from '../../SettingsBar/SettingsBar'
import { Pagination } from '../../../common/components/Pagination/Pagination'
import Button from '../../../common/components/Button/Button'
import { useNavigate } from 'react-router-dom'

const PackTable = () => {
  const dispatch = useAppDispatch()
  const cardPacks = useAppSelector((state) => state.packs.cardPacks)
  const page = useAppSelector((state) => state.packs.page) // Текущая страница
  const pageCount = useAppSelector((state) => state.packs.pageCount) // Колод на странице
  const cardPacksTotalCount = useAppSelector((state) => state.packs.cardPacksTotalCount) // количество колод
  const userId = useAppSelector((state) => state.profile._id) // userID
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getPacksTC())
  }, [userId])

  const onPageChanged = (page: number) => {
    dispatch(setPacksAC({ page }))
    dispatch(getPacksTC())
  }

  const changePageSize = (pageCount: string) => {
    dispatch(setPacksAC({ pageCount: +pageCount }))
    dispatch(getPacksTC())
  }
  const addNewPackHandler = () => {
    navigate('/newPack') // добавить правильный url для перехода
  }

  return (
    <div className={stl.wrapper}>
      <Button onClick={addNewPackHandler}>Add new pack</Button>
      <div>
        <SettingsBar />
      </div>
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

      <Pagination
        onPageChanged={onPageChanged}
        changePageSize={changePageSize}
        totalCount={cardPacksTotalCount}
        currentPage={page}
        pageSize={pageCount}
      />
    </div>
  )
}

export default PackTable
