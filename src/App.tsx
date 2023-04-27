import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Scoreboard} from './components/Scoreboard/Scoreboard';

function App() {

    const maxValue = 5
    const startValue = 0

    let [count, setCount] = useState<number>(0)

    useEffect(()=>{localStorage.setItem('countValue', JSON.stringify(count))},[count])

    useEffect(()=>{
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString) {
            setCount(JSON.parse(valueAsString))

        }
        },[])


    const callbackSum = () => {
        count < maxValue && setCount(++count)
    }
    const callbackRes = () => {
        setCount(startValue)
    }

    const disabledSum = count === maxValue

    const disabledRes = count === startValue


    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <Scoreboard count={count} maxValue={maxValue}/>
                </div>
                <div className={s.buttonsContainer}>
                    <Button callbackSum={callbackSum} buttonName="inc" disabled={disabledSum}/>
                    <Button callbackRes={callbackRes} buttonName="reset" disabled={disabledRes}/>
                    {/*<Button callbackRes={callbackRes} buttonName="settings" disabled={disabledRes}/>*/}
                </div>

            </div>
        </div>
    );
}

export default App;
