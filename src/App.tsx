import React, {useEffect, useState} from 'react';
import Counter from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import Error404 from './components/Error404/Error404';


function App() {
// Settings

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const callbackSet = (max, min) => {
        setMaxValue(max)
        setStartValue(min)
        callbackSum()
        callbackRes()
    }

// Counter
    let [count, setCount] = useState<number>(0)

    useEffect(() => {
        if (count) {
            localStorage.setItem('countValue', JSON.stringify(count))
        }
    }, [count])

    useEffect(() => {
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString) {
            setCount(JSON.parse(valueAsString))
        }
    }, [])


    useEffect(() => {
        if (maxValue)
            localStorage.setItem('maxValue', JSON.stringify(maxValue))

    }, [maxValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            setMaxValue(JSON.parse(valueAsString))
        }
    }, [])



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
            <Routes>
                <Route path={'/'}
                       element={<Counter count={count}
                                         callbackRes={callbackRes}
                                         callbackSum={callbackSum}
                                         disabledSum={disabledSum}
                                         disabledRes={disabledRes}
                                         maxValue={maxValue}/>}/>
                <Route path={'/Settings'} element={<Settings
                    callbackSet={callbackSet}
                />}/>
                <Route path={'*'} element={<Error404/>}/>

            </Routes>
        </>
    );
}

export default App;
