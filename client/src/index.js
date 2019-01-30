import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import Nav from "./components/Nav";
import About from "./pages/about";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Products from "./pages/products";

const App = () => {
  return (
    <Router>
      <div className="subtle-background">
        <div className="wrapper">
          <div>
            <Nav />
            <Route exact path="/" component={Products} />
            <Route exact path="/about" component={About} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
