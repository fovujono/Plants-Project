const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  image: {type: String},
  plantName: { type: String, required: true },
  price: {type: Number},
  stock: { type: Number},
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
