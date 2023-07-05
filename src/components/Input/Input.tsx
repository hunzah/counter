import React, {ChangeEvent} from 'react';
import s from './Input.module.scss'

type PropsType = {
    value: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}

export const Input = (props: PropsType) => {
    const inputStyles = `${s.input} ${props.error ? s.error : ''}`;
    return (
        <div className={s.inputWrap}>
            <input
                className={inputStyles}
                value={props.value} onChange={props.callback}/>
        </div>
    );
};

