import React from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';


type PropsType = {
    maxValue:number
    startValue:number
    maxValueOnChangeHandler:(e:any)=>void
    startValueOnChangeHandler:(e:any)=>void
}
export const Settings: React.FC<PropsType> = (props) => {
const {maxValue,startValue,maxValueOnChangeHandler,startValueOnChangeHandler, ...otherProps} = props

    return (
        <div className={s.settings}>
            <div className={s.wrapper}>
                <div className={s.inputs}>
                    <div className={s.h3AndInput}>
                        <h3>Max Value</h3>
                        <input value={maxValue}
                        onChange={maxValueOnChangeHandler}/>
                    </div>
                    <div className={s.h3AndInput}>
                        <h3>Min Value</h3>
                        <input value={startValue} onChange={startValueOnChangeHandler}/>
                    </div>
                </div>
                <div className={s.buttonsContainer}>
                    <Button buttonName="set" disabled={false}/>
                    <NavLink to={'/'}>
                        <Button buttonName={'counter'} disabled={false}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
