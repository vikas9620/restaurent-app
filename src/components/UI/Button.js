import React from "react";
import './button.css';

const Button = (props)=> {
    return <button className="btn" >{props.children}</button>
}

export default Button