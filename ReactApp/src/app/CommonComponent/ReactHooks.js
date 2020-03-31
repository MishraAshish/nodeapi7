import React, {useState, useReducer} from "react";

//https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
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
    
    const [userName, setName] = useState({Name:"Ashish", Age:25});

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    const changeName = () => {
        setName({Name : userName.Name + " 25", Age: 75, City : "NY"});
    }

    return (
    <div>
        <button onClick={generateCoupon}>
        Your generated coupon is {couponNumber}
    </button>
    <button onClick={changeName}>
        Your name is {userName.Name + "   " + userName.Age + "   " + userName.City}
    </button>
    </div>)
}

export default FunctionState;

