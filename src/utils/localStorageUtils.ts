// localStorage.js
import {RootStateType} from '../components/redux/redux-store';



export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};



export const saveState = (state:RootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
};





// store.js

// ...
// store.subscribe(throttle(() => {
//     saveState({
//         todos: store.getState().todos
//     });
// }, 1000));