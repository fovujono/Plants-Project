import React from "react";
import plants from "../../plants.json";
import PlantCard from "../../components/PlantCard";
import Nav from "../../components/Nav/index";
import SearchBar from "../../components/SearchBar";



class Products extends React.Component {
    constructor(props) {
        super();
        this.state = {
            plants: plants
        };
    }

    handleSearch(e){
        const value = e.target.value;
        console.log(value.toLowerCase(), plants[0].plantName.toLowerCase().search(value.toLowerCase()) === -1)
        const queriedObjs = plants.filter(e => e.plantName.toLowerCase().search(value.toLowerCase()) !== -1);
        this.setState({plants: queriedObjs});
        console.log('state plants', this.state.plants)
    }

    render() {
        return(
            <div>
        <Nav>
            <SearchBar handleSearch={this.handleSearch.bind(this)} />
        </Nav>
          <div  className="content-wrapper">
            {   (this.state.plants.length !== 0) ?
                this.state.plants.map(({id, plantName, image, price, stock}) => (
                <PlantCard
                  id={id}
                  key={id}
                  plantName={plantName}
                  image={image}
                  price={price}
                  stock={stock}
                />
              )): "NO RESULTS" 
            
            }
              </div>
            </div>
        )
    }
}

export default Products;