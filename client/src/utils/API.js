import axios from "axios";

export default {
  // Gets all books
  getPlants: function() {
    return axios.get("http://localhost:3004/api/plants/");
  },
  // Saves a book to the database
  savePlants: function(PlantData) {
    return axios.post("/api/plants", PlantData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
