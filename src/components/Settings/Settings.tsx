import React from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.css';

export const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.wrapper}>
                <div className={s.inputs}>
                    <div className={s.h3AndInput}>
                        <h3>Max Value</h3>
                        <input/>
                    </div>
                    <div className={s.h3AndInput}>
                        <h3>Min Value</h3>
                        <input/>
                    </div>
                </div>
                <div className={s.buttonsContainer}>
                    <NavLink to={'/'}>
                        <Button buttonName={'counter'} disabled={false}/>
                    </NavLink>
                    <Button buttonName="set" disabled={false}/>
                </div>
            </div>
        </div>
    );
};
