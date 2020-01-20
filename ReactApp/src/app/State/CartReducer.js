import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = [];

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log("cart Reducer", state, action);
    switch(action.type) {
        //add item to cart
        case ActionTypes.ADD_ITEM:
            //...state; //user, coupon product, cart
            //add newitem to cart from action.payload
            //action.payload.item -> item
            return [...state, action.payload.item]
            
        //empty the cart
        case ActionTypes.EMPTY_CART:
            return []

        //update the cart item

        //delete cart item

        //return basic intial state
        default:
            return state;
    }
}