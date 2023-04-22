import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    callbackSum?: ()=> void
    callbackRes?: ()=> void
    buttonName:string
    disabled: boolean
}

export const Button: FC<PropsType> = (props) => {
    const {callbackSum,callbackRes,buttonName,disabled} = props
    const onClickHunter = () => {
        if(callbackSum) callbackSum()
        if(callbackRes) callbackRes()
    }

    return (
        <span className={s.wrapper}>
            <button disabled={props.disabled} className={s.buttons} onClick={onClickHunter}>{props.buttonName}</button>
        </span>
    );
};

