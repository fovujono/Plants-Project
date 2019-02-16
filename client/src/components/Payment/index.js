import React from "react";
import "./style.css";
import "../../pages/products";
import { CartHelper } from '../../utils/action';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      price: props.price,
      stock: props.stock,
      plantName: props.plantName,
      image: props.image
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
   
    let data = this.state;
    CartHelper.setCart(data);
  };

  onClick = () => {
    this.addToCart();
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

        <button className="add-to-cart" onClick={this.onClick}>
          Add To Cart
        </button>
      </div>
    );
  }
}

export default Payment;
