import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

const Header = (props) => {
    //read user from props his name and then create two set of links
    return(
           <div className="col-md-12">
               <h2>
                   Hi <b>{props.user.firstName}</b>, Welcome To Synergisticit.
               </h2>
               {props.user.firstName != "" ?
               <React.Fragment>
                    <NavLink to="/Home" exact className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/product" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Products  </NavLink>
                    <NavLink to="/createProduct" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Add Product </NavLink>
                    <NavLink to="/cart" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Cart  </NavLink>               
                    <NavLink to="/checkout" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Checkout  </NavLink>                                    
                    <NavLink to="/User" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Admin  </NavLink>
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                    <NavLink to="/counter" className="button" activeClassName="success">Counter  </NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to="/Home" exact className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/User" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Login  </NavLink>
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                </React.Fragment>}
            </div>
    )
}

//subcribing and reading state(data) as props from store(reducers)
const mapStateToProps = (state) => {
    return{
        user:state.user.user
    }
}

export default connect(mapStateToProps, null)(Header);