import counterReducer, {incrementCountAC, resetCountAC,setMaxValueAC} from './counterReducer';
import {ChangeEvent} from 'react';

test('count should be increment',()=>{

    const startState = {
        count: 0,
        startValue: 0,
        maxValue: 5,
    };

    const endStateState = counterReducer(startState,incrementCountAC())
    expect(endStateState.count).toBe(1)
})
test('count must be reset',()=>{

    const startState = {
        count: 3,
        startValue: 0,
        maxValue: 5,
    };

    const endStateState = counterReducer(startState,resetCountAC())
    expect(endStateState.count).toBe(0)
})
test('new maxValue should be added',()=>{

    const startState = {
        count: 3,
        startValue: 0,
        maxValue: 5,
    };
    const mockEvent = {
        currentTarget: { value: '8' },
    } as ChangeEvent<HTMLInputElement>;
    const endStateState = counterReducer(startState,setMaxValueAC(mockEvent))
    expect(endStateState.maxValue).toBe(8)
})
