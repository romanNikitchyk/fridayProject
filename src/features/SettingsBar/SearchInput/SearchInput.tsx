import React, { ChangeEvent, useState } from 'react'
import Input from '../../../common/components/Input/Input'
import { useAppDispatch } from '../../../common/hook/hook'

type SearchInputPropsType = {
  width?: string
}
const SearchInput = (props: SearchInputPropsType) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const pressEnterKeyHandler = () => {
    if (value.trim() !== '') {
      // dispatch(setParamsAC({ packName: value }))
    }
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  let inputWidth = ''
  if (props.width) {
    inputWidth = props.width
  } else {
    inputWidth = '150px'
  }
  return (
    <div>
      <div>
        <span>Search</span>
      </div>
      <Input
        style={{ width: inputWidth }}
        placeholder={'Provide your text and press Enter'}
        onChange={onChangeHandler}
        onEnter={pressEnterKeyHandler}
      />
    </div>
  )
}

export default SearchInput
