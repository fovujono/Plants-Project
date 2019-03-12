import React from "react";
import "./style.css";
import Payment from "../Payment";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class PlantCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
  }

  toggle = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };

  render() {
    return (
      <div className="plant-container">
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={r => (this.flippyHorizontal = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
        >
          <FrontSide style={{ padding: "0rem", boxShadow: "none" }}>
            <div className="card">
              <button
                className="toggle-style"
                onClick={() => this.flippyHorizontal.toggle()}
              >
                Learn about {this.props.plantName}
              </button>
              <div className="img-container">
                <img alt={this.props.plantName} src={this.props.image} />
              </div>
              <div className="content">
                <p> {this.props.plantName}</p>
                <p>${this.props.price}</p>

                <Payment
                  key={this.props._id}
                  id={this.props._id}
                  image={this.props.image}
                  plantName={this.props.plantName}
                  price={this.props.price}
                  stock={this.props.stock}
                  description={this.props.description}
                  water={this.props.water}
                  sunlight={this.props.sunlight}
                />
              </div>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>
          <a
                className="toggle-style"
                onClick={() => this.flippyHorizontal.toggle()}
              >
                Back
              </a>
            <div className="back-container">
              <div className="description">{this.props.description}</div>

              <p className="water-sun">{this.props.sunlight}</p>

              <p className="water-sun">{this.props.water}</p>

             
            </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default PlantCard;
