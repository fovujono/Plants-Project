import React from "react";
import './style.css'
import '../../pages/products';
class Payment extends React.Component {
  constructor(props) {
    super(props);

 
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count +1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count -1 });
  };

  addtToCart = () => {
    
  }

  render() {
    return (
      <div>
      <div className="payment-container">
   

    
          <button className="decrement" onClick={this.handleDecrement}>-</button>
      
 
    <input type="text" name="name" value={this.state.count}></input>
 
     
          <button className="increment" onClick={this.handleIncrement}>+</button>
      

   
      </div>
      
      <button className="add-to-cart">Add To Cart</button>
    </div>
    );
  } 
}

export default Payment;
