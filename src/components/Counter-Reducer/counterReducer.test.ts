import counterReducer, {CounterStateType, incrementCountAC, resetCountAC} from './counterReducer';

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
