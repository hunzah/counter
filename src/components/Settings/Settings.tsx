import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';
import b from '../Button/Button.module.css';
import i from './Settings.module.css'
import counterContainer from './../Counter/Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../redux/redux-store';
import {saveStartAndMaxValueAC, setMaxValueAC, setStartValueAC, updateCountAC} from '../Counter-Reducer/counterReducer';


type PropsType = {
    callbackSet: (min: number, max: number) => void;
    // setCount:(startValue:number)=>void
    // startValue: number
    // maxValue: number
    // setMaxValue: (maxValue: number) => void
    // setStartValue: (startValue: number) => void
};

export const Settings: React.FC<PropsType> = () => {


        // const {callbackSet} = props;
        const maxValue = useSelector<RootStateType, number>(counterState => counterState.counterState.maxValue)
        const startValue = useSelector<RootStateType, number>(counterState => counterState.counterState.startValue)
        // const count = useSelector<RootStateType, number>(counterState => counterState.counterState.count)
        const dispatch = useDispatch()
        const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = +e.currentTarget.value;
            if (!isNaN(newValue)) {
                // setMaxValue(newValue);
                dispatch(setMaxValueAC(e))
            }
        };

        const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            // const newValue = +e.currentTarget.value;
            // if (!isNaN(newValue)) {
            // setStartValue(newValue);
            dispatch(setStartValueAC(e))

        };
        const onClickSetHandler = () => {
            // callbackSet(maxValue, startValue)
            dispatch(saveStartAndMaxValueAC(startValue, maxValue))
            // localStorage.setItem('maxValue', String(maxValue))
            // localStorage.setItem('startValue', String(startValue))
            dispatch(updateCountAC(startValue))
        }


    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (startValue > maxValue) {
            setError('start value must be less than max value');
        } else if (typeof (startValue) !== 'number' || typeof (maxValue) !== 'number') {
            setError('Value can only be a number');
        } else {
            setError(undefined);
        }
    }, [startValue, maxValue]);

    const inputErrorStyles = error ? i.error : '';
        return (
            <div className={counterContainer.counterContainer}>
                <div className={s.wrapper}>
                    <div className={s.inputs}>
                        <div className={s.h3AndInput}>
                            <h3>Max Value</h3>
                            <input
                                className={`${i.input} ${error ? i.error : ''}`}
                                value={maxValue} onChange={onChangeMaxValueHandler}/>
                        </div>
                        <div className={s.h3AndInput}>
                            <h3>Min Value</h3>

                            <input
                                className={`${i.input} ${error ? i.error : ''}`}
                                value={startValue} onChange={onChangeStartValueHandler}/>
                        </div>
                        {error && <div className={i.errorText}>{error}</div>}
                    </div>
                    <div className={s.buttonsContainer}>
                        {error ? <button disabled={true} className={b.buttons} onClick={onClickSetHandler}>set</button>:
                            <button className={b.buttons} onClick={onClickSetHandler}>set</button>}
                        <NavLink to={'/counter'}>
                            <Button buttonName={'counter'} disabled={false}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
;