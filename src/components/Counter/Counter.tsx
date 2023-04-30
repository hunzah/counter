import React from 'react';
import s from './Counter.module.css'
import {Scoreboard} from '../Scoreboard/Scoreboard';
import {Button} from '../Button/Button';

type PropsType = {
    count:number
    maxValue:number
    callbackSum:()=>void
    disabledSum:boolean
    callbackRes:()=>void
    disabledRes:boolean
}

const Counter = (props:PropsType) => {
    const {count,maxValue,callbackSum,disabledSum,callbackRes,disabledRes,...otherProps} = props
    return (
        <div className={s.counter}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <Scoreboard count={count} maxValue={maxValue}/>
                </div>
                <div className={s.buttonsContainer}>
                    <Button callbackSum={callbackSum} buttonName="inc" disabled={disabledSum}/>
                    <Button callbackRes={callbackRes} buttonName="reset" disabled={disabledRes}/>
                    <Button callbackRes={callbackRes} buttonName="settings" disabled={disabledRes}/>
                </div>

            </div>
        </div>
    );
};

export default Counter;