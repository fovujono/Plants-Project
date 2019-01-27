import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Products from "./containers/Products";

const App = () => {
  return (
    <div className="subtle-background">
      <div className="wrapper">
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
