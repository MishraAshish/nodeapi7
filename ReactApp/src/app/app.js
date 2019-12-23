import React from "react";

//export class App extends React.Component{
export default class App extends React.Component{
    constructor(props, context){
        console.log("We are in constructor");
    }

    render(){
        return(
            <div>
               <h1> {"This is my first component"}</h1>
            </div>
        )    
    }
} 