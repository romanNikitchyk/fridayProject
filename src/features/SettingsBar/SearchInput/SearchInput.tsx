import React, { ChangeEvent, useState } from 'react'
import Input from '../../../common/components/Input/Input'
import { useAppDispatch } from '../../../common/hook/hook'
import { setParamsAC } from '../../Packs/packsReducer'

const SearchInput = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const pressEnterKeyHandler = () => {
    if (value.trim() !== '') {
      dispatch(setParamsAC({ packName: value }))
    }
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  console.log(value)
  return (
    <div>
      <div>
        <span>Search</span>
      </div>
      <Input
        placeholder={'Provide your text and press Enter'}
        onChange={onChangeHandler}
        onEnter={pressEnterKeyHandler}
      />
    </div>
  )
}

export default SearchInput
