import React from "react";

const CartData = props => {
  console.log(props);
  return (
    <div className="cart-data">
      <h1>
        {props.stock} {props.price} {props.stock}
      </h1>
    </div>
  );
};

export default CartData;
