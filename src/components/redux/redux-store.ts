import {combineReducers, legacy_createStore as createStore} from 'redux'
import counterReducer from '../Counter-Reducer/counterReducer';

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(
    {counterState: counterReducer}
)

const store = createStore(rootReducer)

export default store