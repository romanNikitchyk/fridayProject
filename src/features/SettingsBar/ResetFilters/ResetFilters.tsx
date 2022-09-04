import React from 'react'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC, setPacksAC } from '../../Packs/packsReducer'

const ResetFilters = () => {
  const dispatch = useAppDispatch()
  const minCardsCount = useAppSelector((state) => state.packs.minCardsCount)
  const maxCardsCount = useAppSelector((state) => state.packs.maxCardsCount)
  const onClickHandler = () => {
    dispatch(
      setPacksAC({ packName: '', user_id: '', min: minCardsCount, max: maxCardsCount, page: 1 })
    )
    dispatch(getPacksTC())
  }
  return (
    <div>
      <Button onClick={onClickHandler}>Reset Filters</Button>
    </div>
  )
}

export default ResetFilters
