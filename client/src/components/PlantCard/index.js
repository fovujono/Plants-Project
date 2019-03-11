import React from "react";
import "./style.css";
import Payment from "../Payment";
import Flippy, {FrontSide, BackSide} from 'react-flippy';

class PlantCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="plant-container">
       <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
   
  >
    <FrontSide>
        <div className="card">
      <div className="img-container">
        <img alt={this.props.plantName} src={this.props.image} />
      </div>
      <div className="content">
        <p> {this.props.plantName}</p>
        <p>${this.props.price}</p>
        {/* <p>{props.stock}</p>  */}
        <Payment
          key={this.props._id}
          id={this.props._id}
          image={this.props.image}
          plantName={this.props.plantName}
          price={this.props.price}
          stock={this.props.stock}
        />
      </div>
    </div>
    </FrontSide>
    <BackSide>
      ROCKS
    </BackSide>
  </Flippy>
 
      </div>
    );
  }
}

export default PlantCard;
