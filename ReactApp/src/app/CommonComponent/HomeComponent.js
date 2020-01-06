import React from "react";
import {PropTypes} from "prop-types";

export class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            Name: props.Name,
            Age : props.Age,
            FullName : "Jameel"
        }
    }

    render(){
        return(
            <div>
                {/* <input type="text" value={this.state.Name} onChange={this.UpdatName} /> */}
                 <h2>{"My Name is : "+this.state.Name}</h2>
                 <h2>{"My Age is : "+this.state.Age}</h2>
                 <div>
                     <h2>{"Full Name : "}</h2><b>{this.state.FullName}</b>
                 </div>
                 {/* <button id={"TestButton"} onClick={this.UpdateAge}>{"UpdateAge"}</button> */}
                 <hr/>
                 {/* <input type="text" ref={this.textInput} /> */}
            </div>
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