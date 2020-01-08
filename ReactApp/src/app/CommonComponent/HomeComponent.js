import React from "react";
import {PropTypes} from "prop-types";

export class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            Name: props.Name,
            Age : props.Age,
            FullName : "Jameel",
            Title : "This is Home Page for Synergisticit"
        }
        this.textInput = React.createRef(); //creating ref element : Needs to be avoided in actual use unless necessary
        console.log("Component LC - Constructor");
    }

    // componentWillMount(){
    //     //View is not ready and has been removed from raect 16
    //     console.log("Component LC - componentWillMount");
    // }

    componentDidMount(){
        console.log("Component LC - componentDidMount");
        //accessing the actual DOM using ref keyword
        //this.textInput.current.focus();
        //this.textInput.current.value = "Setting Up Reference Value";
    }

    componentWillUnmount(){
        //Called once component is switched
        console.log("Component Will Unmount");
    }

    CallBack = ()=>{
        console.log("Set State Callback");
    }

    UpdatName = (e) => {
        console.log(e.target.value);
        this.state.Name = e.target.value; //wrong way
        //this.setState({Name:e.target.value}, this.CallBack);
        //console.log("Updated Value- ", this.state.Name);
        //this.forceUpdate();//Avoid Using it, because it call render directly skipping your lifecycle methods
    }

    //Update Life Cycle Method

    // componentWillReceiveProp(nextProps){
    //     console.log("componentWillReceiveProps -", nextProps);
    // }

    // getDerivedStateFromProps(nextProps){
    //     console.log("getDerivedStateFromProps -", nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate -", nextProps, nextState);
        if (nextProps.Age > 25) {
            return true;
        }else
            return false;
    }

    // getSnapshotBeforeUpdate(prevState){
    //     console.log("getSnapshotBeforeUpdate ",prevState);
    //     return prevState;
    // }
    
    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate -", prevState, prevProps);
    }

    render(){
        console.log("Re- Render");
        return(
            <div className={"loadimage"}>
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>
            </div>
            // <div>
            //     {this.props.Title ? <h1> {this.props.Title} </h1> : <h1>No Title Present</h1>}
            //     <input type="text" value={this.state.Name} placeholder={"Please Type Name"} onChange={this.UpdatName}/>
            //      <h2 className={"H2Tag"}>{"My Name is : "+this.state.Name}</h2>
            //      <h2>{"My Age is : "+this.state.Age}</h2>
            //      <div>
            //          <h2>{"Full Name : "}</h2><b>{this.state.FullName}</b>
            //      </div>
            //      <button id="UpdateHien" onClick={()=>this.props.UpdateTitle(this.state.Name, this.state.Age)}>Update Title</button>
            //      <hr/>
                 
            //      <input type="text" ref={this.textInput} />
            // </div>
        )
    }
}

Home.propTypes = {
     Name: PropTypes.string.isRequired,
     Age: PropTypes.number.isRequired
}

// Home.defaultProps = {
//      Name: "Ashish",
//      Age: 30
// }