import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Scoreboard} from './components/Scoreboard/Scoreboard';

function App() {
    let [count, setCount] = useState<number>(0)
    const callbackSum = () => {
        count < 5 && setCount(++count)
    }
    const callbackRes = () => {
        setCount(0)
    }

    const disabledSum = count === 6

    const disabledRes = count === 0


    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <div
                    className={s.container}><Scoreboard count={count}/>
                </div>
                <div className={s.buttonsContainer}>
                    <Button callbackSum={callbackSum} buttonName="inc" disabled={disabledSum}/>
                    <Button callbackRes={callbackRes} buttonName="reset" disabled={disabledRes}/>
                    <Button callbackRes={callbackRes} buttonName="settings" disabled={disabledRes}/>
                </div>

            </div>
        </div>
    );
}

export default App;
