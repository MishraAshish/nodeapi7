import React, {Component} from "react";
import {Header} from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import {Home} from "./CommonComponent/HomeComponent";

//export class App extends React.Component{
export default class App extends Component{
    constructor(props, context){
        super(props, context);
        this.title = "This is title coming from parent variable";

    }

    render(){
        return(
            <div>
               <Header>
                    <div>This header is from app js 0</div>                       
                </Header>
                <Home Name="Saranya" Age={25} Title={this.title}/>
               <Footer name={"synergisticit"}/>
            </div>
        )    
    }
}