import React, {Component} from "react";
import {Header} from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import {Home} from "./CommonComponent/HomeComponent";

//export class App extends React.Component{
export default class App extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            title : "This is title coming from parent variable",
            Age:25
        }
    }

    UpdateTitle =(newValue, age)=>{
        this.setState({
            title : this.state.title + " "+ newValue +" "+age,
            Age:40
        })
        console.log("Parent Method - " +this.title);
    }

    render(){
        return(
            <div>
                <b>{this.state.title}</b>
               <Header>
                    <div>This header is from app js 0</div>                       
                </Header>
                
                <Home Name="Saranya" Age={this.state.Age} Title={this.state.title} UpdateTitle={this.UpdateTitle}/>

               <Footer name={"synergisticit"}/>
            </div>
        )    
    }
}