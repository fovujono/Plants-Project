import axios from "axios";

export default {
  // Gets all books
  getPlants: function() {
    return axios.get("/api/plants");
  },
  // Saves a book to the database
  saveBook: function(PlantData) {
    return axios.post("/api/plant", PlantData);
  }
};
