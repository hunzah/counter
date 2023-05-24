export type CounterStateType = {
    count: number;
    startValue: number;
    maxValue: number;
}

const initialState: CounterStateType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
};

export type ActionType = ReturnType<typeof incrementCountAC>


const counterReducer = (
    state: CounterStateType = initialState,
    action:ActionType): CounterStateType => {

    switch (action.type) {
        case 'INCREASE-THE-COUNTER':
            return {...state, count: state.count + 1};
        case 'RESET-THE-COUNTER':
            return {...state, count: state.count =state.startValue};
        default:
            return state;
    }
};


export const incrementCountAC = () => {
    return {type: 'INCREASE-THE-COUNTER'};
};
export const resetCountAC = () => {
    return {type: 'RESET-THE-COUNTER'};
};

export default counterReducer;