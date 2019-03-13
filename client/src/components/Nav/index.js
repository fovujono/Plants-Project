import React from "react";
import "./style.css";
import Modal from "../Modal";
import Cart from "../Cart";

const Nav = props => {
  return (
    <div className="navbar-content">
      <div className="ui inverted segment" id="navbar-background">
        <div className="ui inverted secondary menu">
          <div className="logo">
            <a href="/" className="logo">
              <span className="font-one">TOLEDO'S</span> &nbsp;
              <span className="font-two">PLANTS</span>
            </a>
          </div>
          {props.children}
          <div className="item right floated" id="about-us" />
          <Cart />

          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Nav;
