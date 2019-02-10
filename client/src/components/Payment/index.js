import React from "react";
import "./style.css";
// import API from "../../utils/API"
import "../../pages/products";

class Payment extends React.Component {
  
  constructor(props) {
    super(props);

    console.log("my price is" + " " + props.price)
  

    this.state = {
      count: 0,
      price: props.price,
      total: ""
      // total: 0
    };
  };
  

  componentDidMount = () =>{
    
     this.setState({count: 0})
  }

  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count <= 0) {
      this.setState(prevState => ({ counter: prevState.count - 1 }));
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  onInputChange = value => {
    this.setState({ count: value });
  };

  addToCart = () => {
  this.setState({total: this.state.count * this.state.price}) ;
  console.log("Input Number is " + this.state.count + " " + "price" + " " + this.state.price)
  console.log(this.state.total)

  console.log("this is the current count " + this.state.count )
  
  }

 

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

        <button className="add-to-cart" onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

export default Payment;
