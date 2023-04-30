import React, {useEffect, useState} from 'react';
import Counter from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import Error404 from './components/Error404/Error404';


function App() {
// Settings
    //inputs
    const [maxValue, setMaxValue] = useState<number>(5)
    const maxValueOnChangeHandler = (e: any) => {
        setMaxValue(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const [startValue, setStartValue] = useState<number>(0)
    const startValueOnChangeHandler = (e: any) => {
        setStartValue(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    // buttons

    const callbackSet = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
    }


// Counter
    let [count, setCount] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString) {
            setCount(JSON.parse(valueAsString))

        }
    }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('maxValue')
    //     if (valueAsString) {
    //         setCount(JSON.parse(valueAsString))
    //
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('startValue')
    //     if (valueAsString) {
    //         setCount(JSON.parse(valueAsString))
    //
    //     }
    // }, [])


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
                <Route path={'/Settings'} element={<Settings maxValue={maxValue}
                                                             maxValueOnChangeHandler={maxValueOnChangeHandler}
                                                             startValue={startValue}
                                                             startValueOnChangeHandler={startValueOnChangeHandler}
                                                             callbackSet={callbackSet}/>}/>
                <Route path={'*'} element={<Error404/>}/>

            </Routes>
        </>
    );
}

export default App;
