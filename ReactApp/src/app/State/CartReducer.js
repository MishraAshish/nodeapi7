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
        case ActionTypes.UPDATE_ITEM:
            return state.map (item => {
                if (item.id != action.payload.id)
                    return item;                
                // item to update
                return {...item, qty: action.payload.qty}
            })

        //delete cart item
        case ActionTypes.REMOVE_ITEM: 
            return state.filter(item => item.id != action.payload.id)
            
        //return basic intial state
        default:
            return state;
    }
}