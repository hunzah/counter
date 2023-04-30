import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    callbackSum?: ()=> void
    callbackRes?: ()=> void
    callbackSet?: ()=> void
    buttonName:string
    disabled: boolean
}

export const Button: FC<PropsType> = (props) => {
    const {callbackSum,callbackRes,buttonName,disabled,callbackSet, ...otherProps} = props
    const onClickHunter = () => {
        if(callbackSum) callbackSum()
        if(callbackRes) callbackRes()
        if(callbackSet) callbackSet()
    }
const className = disabled? `${s.buttons} ${s.disabled}`:s.buttons
    return (
        <div className={s.wrapper}>
            <button disabled={disabled} className={className} onClick={onClickHunter}>{buttonName}</button>
        </div>
    );
};

