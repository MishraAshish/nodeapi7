import {connect} from "react-redux";  
import CheckoutComponent from "../../Component/Checkout/CheckoutComponent";  
 
let mapStateToProps = (state) => { //subscription  
    return{  
        cartlength:state.cart.length,  
        items : state.cart, 
        coupon:state.coupon.coupon,  
        user: state.user.user  
    }  
}  
export default connect(mapStateToProps, null)(CheckoutComponent);