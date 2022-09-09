import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getCardsTC } from '../cardsReducer'
import stl from './CardsTable.module.css'
import { Pagination } from '../../../common/components/Pagination/Pagination'
import { Link, Navigate } from 'react-router-dom'
import Preloader from '../../../common/components/Preloader/Preloader'
import CardsTableBody from './CardsTableBody'
import SearchInput from '../../SettingsBar/SearchInput/SearchInput'
import Button from '../../../common/components/Button/Button'

const CardsTable = () => {
  const dispatch = useAppDispatch()
  const isInit = useAppSelector((state) => state.auth.isInitialized)
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const cards = useAppSelector((state) => state.cards.cards)
  const cardsPack_id = cards[0]?.cardsPack_id
  const userId = useAppSelector((state) => state.profile._id)
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
    <div>
      <Link className={stl.link} to={'/Packs'}>
        Back to Packs List
      </Link>
      <div>
        {cardsPack_id === userId ? (
          <div className={stl.nameContainer}>
            <h2>My cards</h2>
            <Button>Add new card</Button>
          </div>
        ) : (
          <div className={stl.nameContainer}>
            <h2>Friends cards</h2>
            <Button>Learn pack</Button>
          </div>
        )}
      </div>
      <div className={stl.wrapper}>
        <div className={stl.searchContainer}>
          <SearchInput width={'1008px'} />
        </div>
        <div className={stl.tableContainer}>
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
        </div>
        <Pagination
          onPageChanged={onPageChanged}
          changePageSize={changePageSize}
          totalCount={cardsTotalCount}
          currentPage={page}
          pageSize={pageCount}
        />
      </div>
    </div>
  )
}

export default CardsTable
