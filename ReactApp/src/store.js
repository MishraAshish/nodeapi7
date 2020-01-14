import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware"; //make aync call to api
import thunk from 'redux-thunk';//make aync call to api
import user from "./app/State/UserReducer";
import product from "./app/State/ProductReducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers(
        {
            user,
            product
        }),//we need to combine multiple reducers
    {},
    applyMiddleware(myLogger, promise, thunk)    
)