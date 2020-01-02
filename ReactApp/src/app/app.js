import React from "react";

//export class App extends React.Component{
export default class App extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <div>
               <h1> {"This is my first component"}</h1>
               <h1> {"This is my second data component"}</h1>
            </div>
        )    
    }
} 

export class App1 extends React.Component{
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