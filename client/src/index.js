import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Products from "./containers/Products";
const App = () => {
  return (
    <div className="wrapper">
      <div>
        <Products />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
