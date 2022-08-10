import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import s from './Checkbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
}

const Checkbox: FC<PropsType> = (
    {
        onChangeChecked,
        children,
        type,
        onChange,
        onKeyPress,
        className,
        ...restProps
    }
) => {
    const finalClassName = `${s.default} ${className}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    };

    return (
        <label className={finalClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeHandler}
                className={s.input}
                {...restProps}
            />
            <span className={s.checkbox}></span>
            {children && <span className={s.title}>{children}</span>}
        </label>
    );
};


export default Checkbox;