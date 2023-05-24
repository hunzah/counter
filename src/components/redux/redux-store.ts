import { createStore, combineReducers } from "redux"
import counterReducer from '../Counter-Reducer/counterReducer';

const reducers = combineReducers(
    {counterReducer}
)

const store = createStore(reducers)

export default store