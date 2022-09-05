import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getCardsTC } from '../cardsReducer'
import stl from './CardsTable.module.css'
import { SettingsBar } from '../../SettingsBar/SettingsBar'
import { Pagination } from '../../../common/components/Pagination/Pagination'
import { Navigate } from 'react-router-dom'
import Preloader from '../../../common/components/Preloader/Preloader'
import CardsTableBody from './CardsTableBody'

const CardsTable = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector((state) => state.auth.isInitialized)
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const cards = useAppSelector((state) => state.cards.cards)
  const cardsPack_id = cards[0]?.cardsPack_id
  const page = useAppSelector((state) => state.cards.page) // Текущая страница
  const pageCount = useAppSelector((state) => state.cards.pageCount) // Колод на странице
  const cardsTotalCount = useAppSelector((state) => state.cards.cardsTotalCount) // количество колод

  const onPageChanged = (page: number) => {
    dispatch(getCardsTC({ cardsPack_id, page }))
  }

  const changePageSize = (pageCount: string) => {
    dispatch(getCardsTC({ cardsPack_id, pageCount: +pageCount }))
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
            <th>Question</th>
            <th>Answer</th>
            <th>Last updated</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((el) => {
            return (
              <CardsTableBody
                key={el._id}
                cardsPackId={el._id}
                question={el.question}
                answer={el.answer}
                updated={el.updated}
                grade={el.grade}
                packUserId={el.user_id}
              />
            )
          })}
        </tbody>
      </table>

      <Pagination
        onPageChanged={onPageChanged}
        changePageSize={changePageSize}
        totalCount={cardsTotalCount}
        currentPage={page}
        pageSize={pageCount}
      />
    </div>
  )
}

export default CardsTable
