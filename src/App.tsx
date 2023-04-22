import React, {useState} from 'react';
import logo from './logo.svg';
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

    const disabledSum = count === 5

    const disabledRes = count === 0


    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <div className={s.container}><Scoreboard count={count}/>
                    <Button callbackSum={callbackSum} buttonName="Sum" disabled={disabledSum}/>
                    <Button callbackRes={callbackRes} buttonName="Res" disabled={disabledRes}/>
                </div>
            </div>
        </div>
    );
}

export default App;
