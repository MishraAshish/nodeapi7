import React from "react";
import {NavLink} from "react-router-dom";

export function Header(props) {
    return(
           <div className="col-md-12">
                <NavLink to="/Home" exact className="button" activeClassName="success" >Home </NavLink> 
                <NavLink to="/product" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Products  </NavLink>
                <NavLink to="/cart" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Cart  </NavLink>               
                <NavLink to="/checkout" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Checkout  </NavLink>                                    
                <NavLink to="/User" className="button" activeStyle={{ color:'white'}} activeClassName="success" >Admin  </NavLink>
                <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                <NavLink to="/counter" className="button" activeClassName="success">Counter  </NavLink>                
            </div>
    )
}