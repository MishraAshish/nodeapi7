import React, {useState} from "react";  
import CheckoutList from "../../Container/Cart/CartListContainer";  
import CheckoutSummary from "../../Container/Cart/CartSummayContainer";  
 
export default function Checkout(props){  
     
    const [processToCheckout, setProcess] = useState(false);

    const checkoutProcess=()=>{
        setProcess(true);  
    }

    console.log("props at checkout",props)  

    return(
        <React.Fragment>
        {
            !processToCheckout ?
            <div className="checkoutComponent">  
                <h2>Checking out </h2>  
                <div className="col-md-12">  
                <b>Hi, {props.user.firstName != "" ? props.user.firstName: "Tom"} </b>  
                {props.coupon>0 ? <p>{" Your Generated Coupon is - "+props.coupon}</p>
                :<p>you don't have Generated coupon  
                </p> }  
                
                </div>  
                <CheckoutList donotshowInputBox={true}/>  
                <CheckoutSummary/>  
                <button onClick={checkoutProcess}>
                            Make Payment
                </button>
            </div>
            :
            <div className="checkoutComponent"> 
                Thank you! Your Payment is in process
            </div>
        }
        </React.Fragment>
    )  
}