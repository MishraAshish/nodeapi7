import React, {Component} from "react";
import {Header} from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";

//export class App extends React.Component{
export default class App extends Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <div>
               <Header>
                    <b>This header is from app js 0</b>
                    <b>{"This header is from app js 1"}</b>   
                </Header>

               <h1> {"This is my first component"}</h1>
               <h1> {"This is my second data component"}</h1>

               <Footer name={"synergisticit"}/>
            </div>
        )    
    }
}