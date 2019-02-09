import React from "react";
import API from "../utils/API";
import PlantCard from "../components/PlantCard";
import Payment from "../components/Payment";
import SearchBar from "../components/SearchBar";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      plants: []
    };
  }

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({
          plants: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleSearch(event) {
    const value = event.target.value;

    const queriedObjs = this.state.plants.filter(
      event => event.plantName.toLowerCase().search(value.toLowerCase()) !== -1
    );

    this.setState({ plants: queriedObjs });
  }

  //   handleSearch(e){
  //     const value = e.target.value;

  //     const queriedObjs = plants.filter(e => e.plantName.toLowerCase().search(value.toLowerCase()) !== -1);
  //     this.setState({plants: queriedObjs});
  //     console.log('state plants', this.state.plants)
  // }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch.bind(this)} />

        <div className="content-wrapper">
          {this.state.plants.length !== 0
            ? this.state.plants.map(plants => (
                <PlantCard
                  key={plants._id}
                  image={plants.image}
                  plantName={plants.plantName}
                  price={"$" + plants.price}
                  // stock={plants.stock}
                >
                  <Payment />
                </PlantCard>
              ))
            : "NO RESULTS"}
        </div>
      </div>
    );
  }
}

export default Products;
