import React, {useEffect, useState} from 'react';
import Counter from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

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
<>
    <Counter count={count} callbackRes={callbackRes} callbackSum={callbackSum}
             disabledSum={disabledSum} disabledRes={disabledRes} maxValue={maxValue}/>
    <Settings/>
</>
    );
}

export default App;
