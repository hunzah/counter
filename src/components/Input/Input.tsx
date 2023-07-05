import React from 'react';
import s from './Input.module.scss'
import i from '../Settings/Settings.module.scss';


export const Input = (props) => {
    const inputStyles = `${s.input} ${props.error ? s.error : ''}`;
    return (
        <div className={s.inputWrap}>
            <input
                className={inputStyles}
                value={props.startValue} onChange={props.onChangeStartValueHandler}/>
        </div>
    );
};

