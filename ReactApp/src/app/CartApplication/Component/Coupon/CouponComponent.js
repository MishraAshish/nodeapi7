import React from 'react';
import FunctionState from '../../../CommonComponent/ReactHooks';

export class Coupon extends React.Component{
    //Creating the view with user interaction
    constructor(props, context){
        super(props, context);
        this.state = {
            coupon: props.coupon,
            firstName: props.user.firstName
        }
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log("next props", nextProps);
        this.setState({
            coupon: nextProps.coupon
        })
    }
    addCoupon = ()=>{
        let coupon = Math.ceil(Math.random()*100000);
        
        this.props.addCoupon(coupon);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hi, {this.state.firstName != "" ? this.state.firstName: "Tom"}</b>
                        <p>Your Generated Coupon is : </p>
                        <b>{this.state.coupon}</b>
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2"} value={"Generate"} onClick={this.addCoupon}/>
                    <FunctionState/>
                </div>
            </section>
        )
    }

}