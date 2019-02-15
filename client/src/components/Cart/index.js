import React from "react";
import "./style.css";
import { Image, Modal } from "semantic-ui-react";

// import CartData from "../CartData";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    this.state = {
      cart: cart
    };
  }

  renderCart = () => {
    if (this.state.cart) {
      return (
        <div className="cart-wrapper">
          {this.state.cart.map(cart => (
            // <CartData
            //   key={index}
            //   price={cart.price}
            //   stock={cart.stock}
            //   count={cart.count}
            //   />

            <div className="cart-entry" style={{ display: "flex" }}>
              <div className="img-box" style={{ width: "130px" }}>
                <img
                  src={cart.image}
                  alt={cart.image}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="content-box">
                <p>Plant:{cart.plantName}</p>
                <p>Amount:{cart.stock}</p>
                <p>Price: ${cart.price}</p>
                <p />
              </div>
            </div>
          ))}
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
            <Modal.Description>{this.renderCart()}</Modal.Description>

            <Image
              wrapped
              size="large"
              src="https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Cart;
