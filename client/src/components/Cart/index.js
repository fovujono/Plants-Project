import React from "react";
import "./style.css";
import { Image, Modal } from "semantic-ui-react";
import { CartHelper } from '../../utils/action'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log("cart state" + this.state)
    
    this.state = {
      cart: [],
      total: 0,
  
    };
  }

  removeItem(id) {
    console.log('removing ' + id)
    const new_cart = CartHelper.removeFromCartById(id);
    const cartTotal = new_cart.reduce((acc, cart) => cart.price * cart.count + acc, 0);
    this.setState({cart: new_cart, total: cartTotal});
  }


  itemsInCart = () => {
    let cartItems = this.state.cart.filter(cart => cart.plantName);
    let cartTotal = cartItems.length;
      
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
                <button onClick={(e) => this.removeItem(cart.id)} style={{'float': 'right'}}>X</button>
                <hr />
              </div>
            </div>
          ))}
              <p className="total-container"> Total: {this.state.total}</p>

              <button className="checkout-button">Check Out</button>
        </div>
      );
    }
  };

  openCart() {
    const cartData = CartHelper.getCart();
    let cartTotal = cartData.reduce((acc, cart) => cart.price * cart.count + acc, 0);
    this.setState({cart: cartData, total: cartTotal});
  }


  render() {
    return (
      <div className="cart-modal">
        <Modal
          trigger={ 
            <button className="item">
              <i className="fas fa-shopping-cart" id="shopping-icon" />
            </button>
          }
          onOpen ={() => this.openCart()}
          
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
