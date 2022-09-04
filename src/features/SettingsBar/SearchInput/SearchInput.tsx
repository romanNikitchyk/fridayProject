import React, { ChangeEvent, useEffect, useState } from 'react'
import Input from '../../../common/components/Input/Input'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import { getPacksTC, setPacksAC } from '../../Packs/packsReducer'

const SearchInput = () => {
  const packName = useAppSelector((state) => state.packs.packName)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState<string>(packName)

  useEffect(() => {
    setValue(packName)
  }, [packName])
  const pressEnterKeyHandler = () => {
    if (value.trim() !== '') {
      dispatch(setPacksAC({ packName: value }))
      dispatch(getPacksTC())
    }
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <div>
      <div>
        <span>Search</span>
      </div>
      <Input
        placeholder={'Type and press Enter'}
        value={value}
        onChange={onChangeHandler}
        onEnter={pressEnterKeyHandler}
      />
    </div>
  )
}

export default SearchInput
