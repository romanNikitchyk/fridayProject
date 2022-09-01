import React, { useState } from 'react'
import Button from '../common/components/Button/Button'
import Input from '../common/components/Input/Input'
import Checkbox from '../common/components/Checkbox/Checkbox'
import EditableSpan from '../common/components/EditableSpan/EditableSpan'
import Select from '../common/components/Select/Select'
import Radio from '../common/components/Radio/Radio'
import InputRange from '../common/components/InputRange/InputRange'
import InputDoubleRange from '../common/components/InputDoubleRange/InputDoubleRange'
import { InputPass } from '../common/components/InputPass/InputPass'

export function Test() {
  const [value, setValue] = useState('')
  const [editValue, setEditValue] = useState('Edit value')
  const [isChecked, setIsChecked] = useState(false)

  const options = ['Angular', 'Vue', 'React', 'Svelte']
  const [option, setOption] = useState(options[2])

  const [value1, setValue1] = useState(10)
  const [value2, setValue2] = useState(90)

  const onChangeRange2 = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  const onClickHandler = () => {
    alert(`value input: ${value}\ncheckbox checked: ${isChecked}\n`)
  }

  return (
    <div style={{ padding: 15 }}>
      <h2>Test Component Page</h2>
      <div>
        <Button onClick={onClickHandler}>Test Button</Button>
      </div>

      <hr />

      <div>
        <Input value={value} onChangeText={setValue} placeholder={'Write text'} />
      </div>

      <hr />

      <div>
        <Checkbox checked={isChecked} onChangeChecked={setIsChecked}>
          Check
        </Checkbox>
      </div>

      <hr />

      <div>
        <EditableSpan
          value={editValue}
          onChangeText={setEditValue}
          spanProps={{ children: editValue ? null : 'Empty title...' }}
        />
      </div>

      <hr />

      <div>
        <Select options={options} onChangeOption={setOption} value={option} />
      </div>

      <hr />

      <div>
        <Radio options={options} onChangeOption={setOption} value={option} />
      </div>

      <hr />

      <div>
        <div>{value1}</div>
        <InputRange onChangeRange={setValue1} value={value1} />
      </div>

      <hr />

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

      <hr />

      <div>
        <InputPass placeholder={'Password'} value={value} onChangeText={setValue} />
      </div>
    </div>
  )
}
