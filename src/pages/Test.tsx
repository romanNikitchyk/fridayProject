import React, {useState} from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import EditableSpan from '../components/EditableSpan';
import Select from '../components/Select';
import Radio from '../components/Radio';
import InputRange from '../components/InputRange';
import InputDoubleRange from '../components/InputDoubleRange';


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
    };

    return (
        <div style={{padding: 15}}>
            <h2>Test Component Page</h2>
            <div>
                <Button
                    onClick={onClickHandler}
                >
                    Test Button
                </Button>
            </div>

            <hr/>

            <div>
                <Input
                    value={value}
                    onChangeText={setValue}
                    placeholder={'Write text'}
                />
            </div>

            <hr/>

            <div>
                <Checkbox
                    checked={isChecked}
                    onChangeChecked={setIsChecked}
                >
                    Check
                </Checkbox>
            </div>

            <hr/>

            <div>
                <EditableSpan
                    value={editValue}
                    onChangeText={setEditValue}
                    spanProps={
                        {children: editValue ? null : 'Empty title...'}
                    }
                />
            </div>

            <hr/>

            <div>
                <Select
                    options={options}
                    onChangeOption={setOption}
                    value={option}
                />
            </div>

            <hr/>

            <div>
                <Radio
                    options={options}
                    onChangeOption={setOption}
                    value={option}
                />
            </div>

            <hr/>

            <div>
                <div>{value1}</div>
                <InputRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <hr/>

            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 340
                }}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>

                <InputDoubleRange
                    onChangeRange={onChangeRange2}
                    value={[value1, value2]}
                />
            </div>
        </div>
    );
}
