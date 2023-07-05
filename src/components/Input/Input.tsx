import React, {ChangeEvent} from 'react';
import s from './Input.module.scss'

type PropsType = {
    value: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    disabled?: boolean
}

export const Input = (props: PropsType) => {
    const {value, callback, disabled, ...otherProps} = props

    const inputStyles = `${s.input} ${props.error ? s.error : ''}`;
    return (
        <div className={s.inputWrap}>
            <input disabled={disabled}
                   className={inputStyles}
                   value={value} onChange={callback}/>
        </div>
    );
};

