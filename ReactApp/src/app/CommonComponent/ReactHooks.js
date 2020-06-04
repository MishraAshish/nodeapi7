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
    let initialState = { firstName: 'Cool' };
    let [state, dispatch] = useReducer(props.addUser, initialState);

    const [couponNumber, setCoupon] = useState(2020);
    
    const [userName, setName] = useState({Name:"Ashish", Age:25});

    const generateCoupon = () => {
        setCoupon(couponNumber + Math.ceil(Math.random()*10000))
    }

    let changeName = () => {
        setName({Name : userName.Name + " 25", Age: 75, City : "NY"});
        initialState = {firstName: "Hotter"};
        debugger;
        //dispatch = useReducer(props.addUser, initialState);
        dispatch(initialState);
    }
    console.log("firstName " + props.user.firstName);
    
    return (
        <div>
            <b>{props.user.firstName}</b>
            <button onClick={generateCoupon}>
            Your generated coupon is {couponNumber}
        </button>
        <button onClick={changeName}>
            Your name is {userName.Name + "   " + userName.Age + "   " + userName.City}
        </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user:state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser:(user) => {
            dispatch(addUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionState);