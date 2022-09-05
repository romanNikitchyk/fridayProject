import React, { useCallback, useState } from 'react'
import InputDoubleRange from '../../../common/components/InputDoubleRange/InputDoubleRange'
import { useAppDispatch } from '../../../common/hook/hook'
import _debounce from 'lodash/debounce'

const NumberOfCards = () => {
  const dispatch = useAppDispatch()

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(100)

  const debounceFn = useCallback(
    _debounce((min, max) => {
      // dispatch(setParamsAC({ max, min }))
    }, 500),
    []
  )

  const onChangeRange2 = ([min, max]: [number, number]) => {
    setMinValue(min)
    setMaxValue(max)
    debounceFn(min, max)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 340,
        }}
      >
        <span>{minValue}</span>
        <span>{maxValue}</span>
      </div>
      <InputDoubleRange onChangeRange={onChangeRange2} value={[minValue, maxValue]} />
    </div>
  )
}

export default NumberOfCards
