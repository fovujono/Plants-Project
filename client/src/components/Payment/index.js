import React from "react";
import './style.css'
import '../../pages/products';
class Payment extends React.Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.state = {};
  }

  render() {
    return (
        
      <div className="payment-container">
          <button className="decrement">-</button>
        <button className="add-to-cart">Add To Cart</button>
          <button className="increment">+</button>
      </div>
    );
  } 
}

export default Payment;
