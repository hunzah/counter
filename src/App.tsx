import React, {useState} from 'react';
import Counter from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import {useDispatch, useSelector} from 'react-redux';
import {
    CounterStateType,
    incrementCountAC,
    resetCountAC,
    setMaxValueAC, setStartValueAC
} from './components/Counter-Reducer/counterReducer';
import {RootStateType} from './components/redux/redux-store';


function App() {
// Settings
    const maxValue = useSelector<RootStateType, number>(counterState=>counterState.counterState.maxValue)
    const startValue = useSelector<RootStateType, number>(counterState=>counterState.counterState.startValue)
    const count = useSelector<RootStateType, number>(counterState=>counterState.counterState.count)

    const dispatch = useDispatch()
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [startValue, setStartValue] = useState<number>(0)
    const callbackSet = (max, min) => {
        // setMaxValue(max)
        dispatch(setMaxValueAC(max))
        dispatch(setStartValueAC(min))
        // setStartValue(min)
        callbackSum()
        callbackRes()
    }

// Counter


    // useEffect(() => {
    //     if (count) {
    //         localStorage.setItem('countValue', JSON.stringify(count))
    //     }
    // }, [count])
    //
    // useEffect(() => {
    //     let countValueAsString = localStorage.getItem('countValue')
    //     if (countValueAsString) {
    //         setCount(JSON.parse(countValueAsString))
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         setMaxValue(JSON.parse(maxValueAsString))
    //     }
    //     let startValue = localStorage.getItem('startValue')
    //     if (startValue) {
    //         setStartValue(JSON.parse(startValue))
    //     }
    // }, [])


    const callbackSum = () => {
        // count < maxValue && setCount(++count)
        dispatch(incrementCountAC())
    }
    const callbackRes = () => {
        // setCount(startValue)
        dispatch(resetCountAC())
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
                    // maxValue={maxValue}
                    // startValue={startValue}
                    callbackSet={callbackSet}
                    // setCount={setCount}
                    // setMaxValue={setMaxValue}
                    // setStartValue={setStartValue}
                />}/>
                <Route path={'*'} element={<Error404/>}/>

            </Routes>
        </>
    );
}

export default App;
