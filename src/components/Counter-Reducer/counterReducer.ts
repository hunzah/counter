import { ChangeEvent } from 'react';

export type CounterStateType = {
    count: number;
    startValue: number;
    maxValue: number;
};

const initialState: CounterStateType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
};


export type ActionType =
    | ReturnType<typeof incrementCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setMaxValueAC>


const counterReducer = (
    state: CounterStateType = initialState,
    action: ActionType
): CounterStateType => {
    switch (action.type) {
        case 'INCREASE-THE-COUNTER':
            return { ...state, count: state.count + 1 };
        case 'RESET-THE-COUNTER':
            return { ...state, count: state.startValue };
        case 'SET-MAX-VALUE':
            const newValue = +action.event.currentTarget.value;
            if (!isNaN(newValue)) {
                return { ...state, maxValue: newValue };
            }
            return state;
        default:
            return state;
    }
};

export const incrementCountAC = () => {
    return { type: 'INCREASE-THE-COUNTER' } as const
};
export const resetCountAC = () => {
    return { type: 'RESET-THE-COUNTER' } as const
};
export const setMaxValueAC = (e: ChangeEvent<HTMLInputElement>) => {
    return {
        type: 'SET-MAX-VALUE',
        event: e
    } as const
};

export default counterReducer;