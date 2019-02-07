import React from "react";
import "./style.css";
import Modal from "../Modal";

const Nav = (props) => {
  return (
  <div className="navbar-content">
    <div className="ui inverted segment" id="navbar-background">
      <div className="ui inverted secondary menu">
      <div className="logo"><a href="/" className="logo">Toledo's Plants</a></div>
         {props.children}
        <a className="item right floated" href="/about"> 
            About Us
        </a>
        <a className="item" href="/checkout">
          Checkout
        </a>

        <Modal/>
      </div>
  
    </div>
    </div>
  );
};

export default Nav;
