//This is the parent component for cart
import React from "react";
import CartList from "../../Container/Cart/CartListContainer";
import CartSummary from "../../Container/Cart/CartSummayContainer";

export default function CartComponent(props){    
    return(
        <div className="cartComponent">
            <h2>Shopping Cart Using Redux</h2>
            <p><b>Cart Length : {props.cartlength}</b></p>

            <button onClick={props.addItemMine} >
                Add Item
            </button>

            <button onClick={props.empty} >
                Empty
            </button>

            <CartList/>
            <CartSummary/>
            <button onClick={() => props.saveCartItems(props.items, props.userid)} >
                Save For Checkout
            </button>

        </div>
    )
}