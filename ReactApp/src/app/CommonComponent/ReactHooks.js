import React, {useState, useReducer} from "react";
import {connect} from "react-redux";
import {addUser} from "../State/Action";
//https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
//hooks in react to use state in functional component
const FunctionState = (props) => {
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

    const [state, dispatch] = useReducer(props.addUser, { firstName: 'Cool' });

    const [couponNumber, setCoupon] = useState(2020);
    
    const [userName, setName] = useState({Name:"Ashish", Age:25});

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    const changeName = () => {
        setName({Name : userName.Name + " 25", Age: 75, City : "NY"});

        dispatch([{ firstName: 'Cool' }])
    }

    return (
        <div>
            <button onClick={generateCoupon}>
            Your generated coupon is {couponNumber}
        </button>
        <button onClick={changeName}>
            Your name is {userName.Name + "   " + userName.Age + "   " + userName.City}
        </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser:(user) => {
            dispatch(addUser(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(FunctionState);