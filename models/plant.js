const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  image: String,
  plantName: { type: String, required: true },
  price:{type: Number},
  stock: { type: Number}
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
