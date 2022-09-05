import React from 'react'
import Button from '../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'

const MyAllFilterButtons = () => {
  const userId = useAppSelector((state) => state.profile._id)
  const dispatch = useAppDispatch()

  const myHandler = () => {
    // dispatch(setParamsAC({ user_id: userId }))
  }
  const allHandler = () => {
    // dispatch(setParamsAC({ user_id: '' }))
  }
  return (
    <div>
      <Button onClick={myHandler}>My </Button>
      <Button onClick={allHandler}>All </Button>
    </div>
  )
}

export default MyAllFilterButtons
