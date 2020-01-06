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

    UpdatName = (e) => {
        console.log(e.target.value);
        //this.state.Name = e.target.value; //wrong way
        this.setState({
            Name:e.target.value
        });
        //console.log("Updated Value- ", this.state.Name);
    }

    render(){
        console.log("Re- Render");
        return(
            <div>
                {this.props.Title ? <h1> {this.props.Title} </h1> : <h1>No Title Present</h1>}
                <input type="text" value={this.state.Name} placeholder={"Please Type Name"} onChange={this.UpdatName}/>
                 <h2 className={"H2Tag"}>{"My Name is : "+this.state.Name}</h2>
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