import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType = DefaultButtonPropsType & {} // Another props

const Button: FC<PropsType> = (
    {
        className,
        ...restProps
    }
) => {
    const finalClassName = `${s.default} ${className}`
    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
};

export default Button;