import counterReducer, {incrementCountAC, resetCountAC, setMaxValueAC, setStartValueAC} from './counterReducer';
import {ChangeEvent} from 'react';

describe('all counter Reducer tests', () => {
    const startState = {
        count: 3,
        startValue: 0,
        maxValue: 5,
    };
    test('count should be increment', () => {


        const endStateState = counterReducer(startState, incrementCountAC())
        expect(endStateState.count).toBe(4)
    })
    test('count must be reset', () => {


        const endStateState = counterReducer(startState, resetCountAC())
        expect(endStateState.count).toBe(0)
    })
    test('new maxValue should be added', () => {

        const mockEvent = {
            target: {value: '8'},
        } as ChangeEvent<HTMLInputElement>;
        const endStateState = counterReducer(startState, setMaxValueAC(mockEvent))
        expect(endStateState.maxValue).toBe(8)
    })
    test('new startValue should be added', () => {


        const mockEvent = {
            target: {value: '3'},
        } as ChangeEvent<HTMLInputElement>;
        const endStateState = counterReducer(startState, setStartValueAC(mockEvent))
        expect(endStateState.startValue).toBe(3)
    })
})
