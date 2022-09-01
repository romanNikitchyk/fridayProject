import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Input from '../../common/components/Input/Input'
import { getPacksTC } from '../Packs/packsReducer'
import { useAppDispatch } from '../../common/hook/hook'

const SettingsBar = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const pressEnterKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      debugger
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
        value={value}
        onChange={onChangeHandler}
        onKeyPress={pressEnterKeyHandler}
      />
    </div>
  )
}

export default SettingsBar
