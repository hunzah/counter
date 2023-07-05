import React from 'react';
import Counter from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import {useDispatch, useSelector} from 'react-redux';
import {
    incrementCountAC,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC
} from './components/Counter-Reducer/counterReducer';
import {RootStateType} from './components/redux/redux-store';


function App() {
// Settings

    const maxValue = useSelector<RootStateType, number>(counterState => counterState.state.maxValue)
    const startValue = useSelector<RootStateType, number>(counterState => counterState.state.startValue)
    const count = useSelector<RootStateType, number>(counterState => counterState.state.count)

    const dispatch = useDispatch()


    const callbackSet = (max, min) => {
        dispatch(setMaxValueAC(max))
        dispatch(setStartValueAC(min))
        callbackSum()
        callbackRes()
    }


    const callbackSum = () => {
        dispatch(incrementCountAC())
    }
    const callbackRes = () => {
        dispatch(resetCountAC())
    }


    const disabledSum = count === maxValue || startValue>maxValue
    const disabledRes = count === startValue


    return (
        <>
            <Routes>
                <Route path={'/counter'}
                       element={<Counter count={count}
                                         callbackRes={callbackRes}
                                         callbackSum={callbackSum}
                                         disabledSum={disabledSum}
                                         disabledRes={disabledRes}
                                         maxValue={maxValue}/>}/>
                <Route path={'/Settings'} element={<Settings
                    callbackSet={callbackSet}/>}/>
                <Route path={'*'} element={<Error404/>}/>

            </Routes>
        </>
    );
}

export default App;
