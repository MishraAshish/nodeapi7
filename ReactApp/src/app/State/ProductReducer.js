import * as ActionTypes from "./ActionTypes";//alias import
//we have two things in ever reducer(state)
//initialize the state
//update the state per dispatched action

const INITIAL_STATE ={
    defaultProduct:{}
}

export default function productReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}