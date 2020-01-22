import React, {useState} from "react";

const FunctionState = () => {
    const [couponNumber, setCoupon] = useState(Math.ceil(Math.random()*10000));

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    return <button onClick={generateCoupon}>
        Your generated coupon is {couponNumber}
    </button>
}

export default FunctionState;