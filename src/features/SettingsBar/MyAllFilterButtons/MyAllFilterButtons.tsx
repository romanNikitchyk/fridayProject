import React from 'react'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC, setPacksAC } from '../../Packs/packsReducer'

const MyAllFilterButtons = () => {
  const userId = useAppSelector((state) => state.profile._id)
  const dispatch = useAppDispatch()

  const myHandler = () => {
    dispatch(setPacksAC({ user_id: userId }))
    dispatch(getPacksTC())
  }
  const allHandler = () => {
    dispatch(setPacksAC({ user_id: '' }))
    dispatch(getPacksTC())
  }
  return (
    <div>
      <Button onClick={myHandler}>My </Button>
      <Button onClick={allHandler}>All </Button>
    </div>
  )
}

export default MyAllFilterButtons
