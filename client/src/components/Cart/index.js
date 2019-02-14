import React from "react";
import "./style.css";
import {Image, Modal } from "semantic-ui-react";
import { CartHelper } from "../../utils/action";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: CartHelper.getCart()
    };
  }

  componentDidMount() {
   alert(CartHelper.getCart())
  }
 
  render() {
    console.log(this.state.products);
  

    return (
      <div className="cart-modal">
        <Modal
          trigger={
            <button className="item">
              <i className="fas fa-shopping-cart" id="shopping-icon" />
            </button>
          }
        >
          <Modal.Header><p> Total: {this.props.total} </p></Modal.Header>
          <Modal.Content image>

            <Modal.Description>
              {/* <div className="cart-css">
              
                    <div className="product-box">
                    {this.state.products.map(e =>
                        <div className="cart-entry"  style={{display: "flex"}}>
                            <div className="img-box" style={{width: "130px"}}>
                                <img src={e.image} alt={e.image} style={{width: "100%", height: "auto"}} /> 
                            </div>
                            <div className="content-box">
                                <p>Plant:{e.plantName}</p>
                                <p>Price: ${e.price}</p>
                                <p></p>
                            </div>
                        </div>
                    )}
                    </div>
                    
                   
                   
               </div> */}
            </Modal.Description>
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
