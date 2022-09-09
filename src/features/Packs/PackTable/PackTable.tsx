import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC, setPacksAC } from '../packsReducer'
import TableBody from './TableBody'
import stl from './PackTable.module.css'
import { SettingsBar } from '../../SettingsBar/SettingsBar'
import { Pagination } from '../../../common/components/Pagination/Pagination'
import { Navigate } from 'react-router-dom'
import Preloader from '../../../common/components/Preloader/Preloader'

const PackTable = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector((state) => state.auth.isInitialized)
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const cardPacks = useAppSelector((state) => state.packs.cardPacks)
  const page = useAppSelector((state) => state.packs.page) // Текущая страница
  const pageCount = useAppSelector((state) => state.packs.pageCount) // Колод на странице
  const cardPacksTotalCount = useAppSelector((state) => state.packs.cardPacksTotalCount) // количество колод

  useEffect(() => {
    dispatch(getPacksTC())
  }, [])

  const onPageChanged = (page: number) => {
    dispatch(setPacksAC({ page }))
    dispatch(getPacksTC())
  }

  const changePageSize = (pageCount: string) => {
    dispatch(setPacksAC({ pageCount: +pageCount }))
    dispatch(getPacksTC())
  }
  if (!isLoggedIn) {
    return <Navigate to={'/'} />
  }
  if (!isInit) {
    return <Preloader />
  }
  if (!isLoggedIn) {
    return <Navigate to={'/'} />
  }
  if (!isInit) {
    return <Preloader />
  }

  return (
    <div className={stl.wrapper}>
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
