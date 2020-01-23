import React, {useState, useReducer} from "react";

//hooks in react to use state in functional component
const FunctionState = () => {
    // constructor(){
    //     this.state ={
    //         coupon:56565
    //     }
    // }

    // setCoupon = ()=>{
    //     this.setState({
    //         coupon:56566  
    //     })
    // }

    const [couponNumber, setCoupon] = useState(2020);

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    return <button onClick={generateCoupon}>
        Your generated coupon is {couponNumber}
    </button>
}

export default FunctionState;