import React from "react";
import "./style.css";

const PlantCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.plantName} src={props.image} />
      </div>
      <div className="content">
        <p> {props.plantName}</p>
        <p>{props.price}</p>
       <p>{props.stock}</p> 
      </div>
    </div>
  );
};

export default PlantCard;
