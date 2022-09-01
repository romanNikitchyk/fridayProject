import React, { ChangeEvent, useState } from 'react'
import Input from '../../common/components/Input/Input'
import { getPacksTC } from '../Packs/packsReducer'
import { useAppDispatch } from '../../common/hook/hook'

const SettingsBar = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const pressEnterKeyHandler = () => {
    if (value.trim() !== '') {
      dispatch(
        getPacksTC({
          packName: value,
        })
      )
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

export default SettingsBar
