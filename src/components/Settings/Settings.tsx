import React, {ChangeEvent, useState} from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';
import b from '../Button/Button.module.css';


type PropsType = {
    callbackSet: (min: number, max: number) => void;
    setCount:(startValue:number)=>void
};

export const Settings: React.FC<PropsType> = (props) => {
    const {callbackSet,setCount} = props;


    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value;
        if (!isNaN(newValue)) {
            setMaxValue(newValue);
        }
    };

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value;
        if (!isNaN(newValue)) {
            setStartValue(newValue);
        }
    };
    const onClickSetHandler = () => {
        callbackSet(maxValue, startValue)
        setCount(startValue)
    }
    return (
        <div className={s.settings}>
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
};