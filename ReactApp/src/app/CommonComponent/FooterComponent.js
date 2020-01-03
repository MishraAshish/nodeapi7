import React from "react";

const Footer = (props)=>{
    let copyright = "This project is a property of - ";
    return(
        <div>
            <b>{copyright + props.name}</b> <i>{2000+20}</i>
        </div>
    )
}

export default Footer;