import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/reducer';
import userReducer from './ducks/userReducer'

// const reducer = combineReducers({
//     main: mainReducer,
//     user: userReducer
// })

export default createStore( reducer, applyMiddleware(reduxPromiseMiddleware()) );


