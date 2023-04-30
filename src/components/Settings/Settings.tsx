import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';
import b from '../Button/Button.module.css';


type PropsType = {
    setStartValue
    setMaxValue
    callbackSet:(min:number, max:number)=> void
}

export const Settings: React.FC<PropsType> = (props) => {
const {callbackSet, ...otherProps} = props
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)


    return (
        <div className={s.settings}>
            <div className={s.wrapper}>
                <div className={s.inputs}>
                    <div className={s.h3AndInput}>
                        <h3>Max Value</h3>
                        <input value={maxValue}
                        onChange={(e) => setMaxValue(+e.currentTarget.value)}/>
                    </div>
                    <div className={s.h3AndInput}>
                        <h3>Min Value</h3>
                        <input value={startValue}  onChange={(e) => setStartValue(+e.currentTarget.value)}/>
                    </div>
                </div>
                <div className={s.buttonsContainer}>
                    <button className={b.buttons} onClick={()=> callbackSet(maxValue, startValue)}>set</button>
                    <NavLink to={'/'}>
                        <Button buttonName={'counter'} disabled={false}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
