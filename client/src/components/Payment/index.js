import React from "react";
import "./style.css";
// import API from "../../utils/API"
import "../../pages/products";
import Cart from "../Cart";
import { CartHelper } from "../../utils/action";

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      price: props.price,
      stock: props.stock
    };
  }


  handleIncrement = () => {
    if (this.state.count > this.state.stock) {
      return alert("Out of Stock");
    }
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count <= 1) {
      this.setState(prevState => ({ counter: prevState.count - 1 }));
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  onInputChange = value => {
    this.setState({ count: value });
  };

  addToCart = () => {
    let products = [];

    let data = this.state;

    if (localStorage.getItem("products") === null) {
     
     
      localStorage.setItem("products", JSON.stringify(products));
    } else {

    products = JSON.parse(localStorage.getItem("products"));

    products.push(data);

    localStorage.setItem("products", JSON.stringify(products));
    }
  };

  render() {
    return (
      <div>
        <div className="payment-container">
          <button className="decrement" onClick={this.handleDecrement}>
            -
          </button>

          <input
            type="text"
            value={this.state.count}
            onChange={event => this.onInputChange(event.target.value)}
          />

          <button className="increment" onClick={this.handleIncrement}>
            +
          </button>
        </div>

        <button className="add-to-cart" onClick={this.addToCart}>
          Add To Cart
        </button>
      </div>
    );
  }
}

export default Payment;
