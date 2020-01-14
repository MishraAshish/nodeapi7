import * as ActionTypes from "./ActionTypes";//alias import
//we have two things in ever reducer(state)
//initialize the state
//update the state per dispatched action

const INITIAL_STATE ={
    user: {
        firstName: "Hien",
        password: "111111",
        street: "NY Journal/ Wall Streets",
        cellPhone: "982558266",
        _id:""
    },
    loading: false
}

export default function userReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ActionTypes.ADDUSER_USER: 
            console.log("Payload Address", action.payload.user)
            //...state = {user:user,trainingProduct:trainingProduct}
            return {...state, user: action.payload.user} 
        case "LOADING":
            return {...state, loading: action.payload.loading}
        
        default:
            return state
    }
}