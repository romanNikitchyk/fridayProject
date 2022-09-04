import React, { useCallback, useEffect } from 'react'
import InputDoubleRange from '../../../common/components/InputDoubleRange/InputDoubleRange'
import { useAppDispatch, useAppSelector } from '../../../common/hook/hook'
import _debounce from 'lodash/debounce'
import { getPacksTC, setPacksAC } from '../../Packs/packsReducer'

const NumberOfCards = () => {
  const dispatch = useAppDispatch()
  const minCardsCount = useAppSelector((state) => state.packs.minCardsCount)
  const maxCardsCount = useAppSelector((state) => state.packs.maxCardsCount)
  const min = useAppSelector((state) => state.packs.min)
  const max = useAppSelector((state) => state.packs.max)

  useEffect(() => {
    dispatch(setPacksAC({ min: minCardsCount, max: maxCardsCount }))
  }, [minCardsCount, maxCardsCount])

  const debounceFn = useCallback(
    _debounce((min: number, max: number) => {
      dispatch(setPacksAC({ min, max }))
      dispatch(getPacksTC())
    }, 500),
    []
  )

  const onChangeRange = ([min, max]: [number, number]) => {
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
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <InputDoubleRange
        onChangeRange={onChangeRange}
        value={[min, max]}
        max={maxCardsCount}
        min={minCardsCount}
      />
    </div>
  )
}

export default NumberOfCards
