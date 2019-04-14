const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  image: {type: String},
  plantName: { type: String, required: true },
  price: {type: Number},
  stock: { type: Number},
  description: { type: String},
  water: {type: String},
  sunlight: {type: String}
});

const realPlantSchema = new Schema({
  _id: {type: String},
  PlantSeed: [plantSchema]
});

const Plant = mongoose.model("Plant", realPlantSchema);

module.exports = Plant;
