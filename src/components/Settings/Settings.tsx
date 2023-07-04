import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';
import b from '../Button/Button.module.css';
import counterContainer from'./../Counter/Counter.module.css'
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
            dispatch(saveStartAndMaxValueAC(startValue,maxValue))
            // localStorage.setItem('maxValue', String(maxValue))
            // localStorage.setItem('startValue', String(startValue))
            dispatch(updateCountAC(startValue))
        }
        return (
            <div className={counterContainer.counterContainer}>
                <div className={s.wrapper}>
                    <div className={s.inputs}>
                        <div className={s.h3AndInput}>
                            <h3>Max Value</h3>

                            <input value={maxValue} onChange={onChangeMaxValueHandler}/>
                        </div>
                        <div className={s.h3AndInput}>
                            <h3>Min Value</h3>

                            <input value={startValue} onChange={onChangeStartValueHandler}/>
                        </div>
                    </div>
                    <div className={s.buttonsContainer}>

                        <button className={b.buttons} onClick={onClickSetHandler}>set</button>

                        <NavLink to={'/'}>
                            <Button buttonName={'counter'} disabled={false}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
;