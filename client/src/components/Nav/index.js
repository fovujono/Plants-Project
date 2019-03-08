import React from "react";
import "./style.css";
import Modal from "../Modal";
import Cart from "../Cart";

const Nav = (props) => {
  return (
  <div className="navbar-content">
    <div className="ui inverted segment" id="navbar-background">
      <div className="ui inverted secondary menu">
      <div className="logo"><a href="/" className="logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-one">TOLEDO'S</span> &nbsp;<span class="font-two">PLANTS</span></a></div>
         {props.children}
        <a className="item right floated" id="about-us"href="/about"> 
            About Us
        </a>
        <Cart />

        <Modal />
      </div>
  
    </div>
    </div>
  );
};

export default Nav;
