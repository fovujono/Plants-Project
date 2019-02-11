import React from "react";
import "./style.css";
import Payment from "../Payment";

const PlantCard = props => {
  return (
    
    <div className="card">
  
      <div className="img-container">
        <img alt={props.plantName} src={props.image} />
      </div>
      <div className="content">
        <p> {props.plantName}</p>
        <p>{props.price}</p>
        {/* <p>{props.stock}</p>  */}
        <Payment
          key={props._id}
          image={props.image}
          plantName={props.plantName}
          price={props.price}
          stock={props.stock}
        />
      </div>
    </div>
  );
};

export default PlantCard;
