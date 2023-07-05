import {ChangeEvent} from 'react';

export type CounterStateType = {
    count: number;
    startValue: number;
    maxValue: number;
};

export const initialState: CounterStateType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
};


export type ActionType =
    | ReturnType<typeof incrementCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof saveStartAndMaxValueAC>
    | ReturnType<typeof updateCountAC>


export const counterReducer = (
    state: CounterStateType = initialState,
    action: ActionType
): CounterStateType => {
    switch (action.type) {
        case 'INCREASE-THE-COUNTER':
            return {...state, count: state.count + 1};
        case 'RESET-THE-COUNTER':
            return {...state, count: state.startValue};
        case 'SET-MAX-VALUE':
            const newMaxValue = +action.event.target.value;
            if (!isNaN(newMaxValue)) {
                return {...state, maxValue: newMaxValue};
            } else return state
        case 'SET-START-VALUE':
            const newStartValue = +action.event.target.value;
            if (!isNaN(newStartValue)) {
                return {...state, startValue: newStartValue};
            } else return state
        case 'SAVE-START-AND-MAX-VALUE':
            return {...state, startValue: action.newStartValue, maxValue: action.newMaxValue};
        case 'UPDATE-COUNT':
            return {...state, count: action.newCountValue};
        default:
            return state;
    }
};
export const incrementCountAC = () => {
    return {type: 'INCREASE-THE-COUNTER'} as const
};
export const resetCountAC = () => {
    return {type: 'RESET-THE-COUNTER'} as const
};
export const setMaxValueAC = (e: ChangeEvent<HTMLInputElement>) => {
    return {
        type: 'SET-MAX-VALUE',
        event: e
    } as const
};
export const setStartValueAC = (e: ChangeEvent<HTMLInputElement>) => {
    return {
        type: 'SET-START-VALUE',
        event: e
    } as const
};
export const saveStartAndMaxValueAC = (newStartValue: number, newMaxValue: number) => {
    return {
        type: 'SAVE-START-AND-MAX-VALUE',
        newStartValue: newStartValue,
        newMaxValue: newMaxValue
    } as const
};
export const updateCountAC = (newCountValue: number) => {
    return {
        type: 'UPDATE-COUNT',
        newCountValue: newCountValue
    } as const
};


export default counterReducer;