import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {NavLink} from 'react-router-dom';
import s from '../Counter/Counter.module.scss';
import counterContainer from '../Counter/Counter.module.scss';
import i from './Settings.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../redux/redux-store';
import {saveStartAndMaxValueAC, setMaxValueAC, setStartValueAC, updateCountAC} from '../Counter-Reducer/counterReducer';
import {Input} from '../Input/Input';


type PropsType = {
    callbackSet: (min: number, max: number) => void;
};

export const Settings: React.FC<PropsType> = () => {


    const maxValue = useSelector<RootStateType, number>(counterState => counterState.state.maxValue)
    const startValue = useSelector<RootStateType, number>(counterState => counterState.state.startValue)



    const dispatch = useDispatch()


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value;
        if (!isNaN(newValue)) {
            dispatch(setMaxValueAC(e))
        }
    };
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(e))
    };


    const onClickSetHandler = () => {
        dispatch(saveStartAndMaxValueAC(startValue, maxValue))
    }

// errors setting
    const [error, setError] = useState<string | undefined>(undefined);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (startValue > maxValue) {
            setError('start value must be less than max value');
            setIsDisabled(true);
        } else if (typeof (startValue) !== 'number' || typeof (maxValue) !== 'number') {
            setError('Value can only be a number');
            setIsDisabled(true);
        } else {
            setError(undefined);
            setIsDisabled(false);
        }
    }, [startValue, maxValue]);

    return (
        <div className={counterContainer.counterContainer}>
            <div className={s.wrapper}>
                <div className={s.inputs}>
                    <div className={s.h3AndInput}>
                        <h3>Max Value</h3>
                        <Input error={error} value={maxValue} callback={onChangeMaxValueHandler}/>
                    </div>
                    <div className={s.h3AndInput}>
                        <h3>Start Value</h3>
                        <Input error={error} value={startValue} callback={onChangeStartValueHandler}/>
                    </div>
                    {error && <div className={i.errorText}>{error}</div>}
                </div>
                <div className={s.buttonsContainer}>
                    <Button buttonName={'set'} disabled={isDisabled} callback={onClickSetHandler}/>
                    <NavLink to={'/counter'}>
                        <Button buttonName={'counter'}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
