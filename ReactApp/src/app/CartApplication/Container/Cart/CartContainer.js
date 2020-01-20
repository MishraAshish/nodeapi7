import {connect} from "react-redux";
import CartComponent from "../../Component/Cart/CartComponent";
import {addItem, empty, saveCartItems} from '../../../State/Action';

let mapStateToProps = (state) => { //subscription
    return{
        cartlength:state.cart.length,
        items : state.cart,
        userid: state.user.user._id
    }
}

let mapDispatchToProps = (dispatch) => { //publishes to store through reducer and action
    return{
        addItemMine:()=>{
            let id = Math.ceil(Math.random() * 10000);
            //cart item object
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            const action = addItem(item);
            dispatch(action);
        },
        //empty: bindActionCreators(empty, dispatch),
        empty: () =>{
            dispatch(empty())
        },
        saveCartItems:(items, userid)=>{
            if (userid) {
                if (items && items.length>=1) {
                    dispatch(saveCartItems(items, userid));    
                } else {
                    alert("Please add items to cart!");
                }                  
            }
            else{ 
                alert("Please Login to save cart!");
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);