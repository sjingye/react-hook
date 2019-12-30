import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as user from './user/reducer.js';
// import thunk from 'react-thunk';

const store = createStore(
    combineReducers({
        ...user,
    }),
    // applyMiddleware(thunk)
)
store.subscribe = function() {
    console.log(store.getState())
}
export default store;