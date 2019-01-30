import React from "react";
import "./style.css";

const Nav = (props) => {
  console.log(props)
  return (
  <div className="navbar-content">
    <div className="ui inverted segment" id="navbar-background">
      <div className="ui inverted secondary menu">
      <div className="logo"><a href="/" className="logo">Toledo's Plants</a></div>
         {props.children}
        <a className="item right floated"> 
            About Us
        </a>
        <a className="item" href="/checkout">
          Checkout
        </a>

        <a className="item" href="/login">
          Sign In
        </a>
      </div>
  
    </div>
    </div>
  );
};

export default Nav;
