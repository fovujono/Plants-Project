import React from "react";
import "./style.css";
import { Image, Modal } from "semantic-ui-react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    this.state = {
      cart: cart,
      total: 0
    };
  }

  componentDidMount = () => {
    if (this.state.cart) {
    let cartTotal = this.state.cart.reduce((acc, cart) => cart.price * cart.count + acc, 0);


    this.setState({total: cartTotal})

    console.log("cart total" + cartTotal)
    }
  }


  renderCart = () => {


    if (this.state.cart) {
      return (
        <div className="cart-wrapper">
          {this.state.cart.map(cart => (
            <div className="cart-entry">
              <div className="img-box">
                <img className="image" src={cart.image} alt={cart.image} />
              </div>
              <div className="content-box">
                <p>Plant: {cart.plantName}</p>
                <p>Amount: {cart.count}</p>
                <p>Price of each: ${cart.price}</p>
                <hr />
              </div>
            </div>
          ))}
              <p className="total-container"> Total: {this.state.total}</p>
        </div>
      );
    }
  };


  render() {
    return (
      <div className="cart-modal">
        <Modal
          trigger={
            <button className="item">
              <i className="fas fa-shopping-cart" id="shopping-icon" />
            </button>
          }
        >
          <Modal.Header>
            <p> Your Cart </p>
          </Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              {this.renderCart()}
          
      
            </Modal.Description>

            <Image
              wrapped
              size="medium"
              src="https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"
            />
          
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Cart;
