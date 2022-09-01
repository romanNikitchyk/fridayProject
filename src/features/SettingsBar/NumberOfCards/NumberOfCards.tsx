import React, { useState } from 'react'
import InputDoubleRange from '../../../common/components/InputDoubleRange/InputDoubleRange'

const NumberOfCards = () => {
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(100)

  const onChangeRange2 = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
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
        <span>{value1}</span>
        <span>{value2}</span>
      </div>
      <InputDoubleRange onChangeRange={onChangeRange2} value={[value1, value2]} />
    </div>
  )
}

export default NumberOfCards
