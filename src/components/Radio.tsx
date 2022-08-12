import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Radio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const Radio: React.FC<PropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    const finalClassName = `${s.default} ${className}`

    const mappedOptions = options ? options.map((o, i) => (
        <label
            key={`${name}-${i}`}
            className={finalClassName}
        >
            <input
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                className={s.input}
                {...restProps}
            />
            <span className={s.radio}></span>
            <span className={s.title}>{o}</span>
        </label>
    )) : []
    return (
        <>
            {mappedOptions}
        </>
    )
}

export default Radio
