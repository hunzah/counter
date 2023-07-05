import {combineReducers, legacy_createStore as createStore} from 'redux'
import counterReducer from '../Counter-Reducer/counterReducer';
import {loadState, saveState} from '../../utils/localStorageUtils';
import {throttle} from 'lodash';


export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(
    {state: counterReducer}
)


const store = createStore(rootReducer, loadState())


store.subscribe(throttle(() => {
    saveState({
        state: store.getState().state
    })
}, 1000))

export default store