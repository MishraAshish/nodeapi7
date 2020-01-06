import React,{PureComponent} from "react";

export function Header(props) {
    return(
        <div>
            {props.children}
            <hr/>
            {/* {props.children[1]} */}
        </div>
    )
}

export class App1 extends PureComponent{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <div>
               <h1> {"This is my second data from App1"}</h1>
            </div>
        )    
    }
}