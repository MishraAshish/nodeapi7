import React from 'react';

export default class User extends React.Component{
    //Creating the view with user interaction
    constructor(props, context){
        super(props, context);
        this.state = {
            firstName: props.user.firstName,
            password: props.user.password,
            street: props.user.street,
            cellPhone: props.user.cellPhone
        }
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log("next props", nextProps);
        this.setState({
            firstName: nextProps.user.firstName,
            password: nextProps.user.password,
            street: nextProps.user.street,
            cellPhone: nextProps.user.cellPhone
        })
    }

    onChangeText = (e)=>{
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("fname")>=0){
            this.setState({
                firstName: target.value
            })
        }else if(classlist.indexOf("password")>=0){
            this.setState({
                password: target.value
            })
        }else if(classlist.indexOf("street")>=0){
            this.setState({
                street: target.value
            })
        }else{
            if (target.value && target.value.length <= 11) {
                this.setState({
                    cellPhone: target.value
                })    
            }            
        }
    }

    AddUser = ()=>{
        let user = {
            firstName: this.state.firstName,
            password: this.state.password,
            street: this.state.street,
            cellPhone: this.state.cellPhone
        }
        console.log("user", user)
        
        this.props.addUser(user);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 fname" value={this.state.firstName} 
                            placeholder="First Name"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Password </b>
                        <input type="password" className="form-control col-md-6 password" value={this.state.password} 
                          placeholder="Password"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Street </b>
                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                          placeholder="Street Name"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 cellphone" value={this.state.cellPhone} 
                            placeholder="Cell Phone" maxLength="11"
                            onChange={this.onChangeText} />
                    </div>
                    
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={this.AddUser}/>
                </div>

            </section>
        )
    }

}