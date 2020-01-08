import React, {Component} from "react";
import {Header} from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import {Home} from "./CommonComponent/HomeComponent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../App.css";
import NotFound from "./CommonComponent/ComponentNotFound";

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
            <Router>
                {/* <b>{this.state.title}</b> */}
                <Header />
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer name={"synergisticit"}/>
            </Router>
        )    
    }
}