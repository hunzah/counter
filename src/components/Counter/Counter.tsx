import React from 'react';
import s from './Counter.module.scss'
import {Scoreboard} from '../Scoreboard/Scoreboard';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';

type PropsType = {
    count: number
    maxValue: number
    callbackSum: () => void
    disabledSum: boolean
    callbackRes: () => void
    disabledRes: boolean
}

const Counter = (props: PropsType) => {
    const {count, maxValue, callbackSum, disabledSum, callbackRes, disabledRes, ...otherProps} = props
    return (
        <div className={s.counterContainer}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <Scoreboard count={count} maxValue={maxValue}/>
                </div>
                <div className={s.buttonsContainer}>
                    <Button callbackSum={callbackSum} buttonName="inc" disabled={disabledSum}/>
                    <Button callbackRes={callbackRes} buttonName="reset" disabled={disabledRes}/>
                    <NavLink to={'/Settings'}>
                        <Button buttonName="settings" disabled={false}/>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Counter;

