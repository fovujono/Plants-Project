import React from "react";
import "./style.css";

const Nav = (props) => {
  console.log(props)
  return (
  <div className="navbar-content">
    <div className="ui inverted segment" id="navbar-background">
      <div className="ui inverted secondary menu">
      <div className="logo">Toledo's Plants</div>
         {props.children}
        <a className="item right floated" href="/">
          About Us
        </a>
        <a className="item" href="/">
          Checkout
        </a>
      </div>
  
    </div>
    </div>
  );
};

export default Nav;
