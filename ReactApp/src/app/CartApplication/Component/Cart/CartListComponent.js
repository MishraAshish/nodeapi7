import React from "react";
import CartItem from "../../Container/Cart/CartItemContainer";

export default function CartList(props) { 
    let {items} = props;//{items}
    console.log("CartList function render");

    return (
        <div> 
            <h2>Cart List</h2>
            { items.length <= 0 ?
            <b>No Items In Your Cart Kindly Add One</b>
                :
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {            
                items.map (item => (
                    <CartItem item={item}
                              key={item.id}
                    />
                ))
            }        
            </tbody>
            </table>
            }
        </div>
    )    
}