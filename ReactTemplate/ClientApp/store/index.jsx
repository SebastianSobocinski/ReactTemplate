import { createStore, combineReducers } from 'redux';

import homeReducer from '../reducers/homeReducer';

const rootReducer = combineReducers({
    home: homeReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;