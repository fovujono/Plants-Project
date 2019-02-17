import React from "react";
import API from "../utils/API";
import PlantCard from "../components/PlantCard";
import SearchBar from "../components/SearchBar";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedPlants: [],
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
          plants: res.data,
          searchedPlants: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleSearch(event) {
    const value = event.target.value;

    const queriedObjs = this.state.plants.filter(
      event =>
        event.plantName
          .toLowerCase()
          .search(value.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")) !== -1
    );

    this.setState({ searchedPlants: queriedObjs });
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch.bind(this)} />

        <div className="content-wrapper">
          {this.state.searchedPlants.length !== 0
            ? this.state.searchedPlants.map(plants => (
                <PlantCard
                  key={plants._id}
                  _id={plants._id}
                  image={plants.image}
                  plantName={plants.plantName}
                  price={plants.price}
                  stock={plants.stock}
                />
              ))
            : "NO RESULTS"}
        </div>
      </div>
    );
  }
}

export default Products;
