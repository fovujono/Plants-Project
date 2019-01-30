const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: Number, required: true, index: true },
  image: String,
  plantName: { type: String, required: true },
  price:{type:Number},
  stock: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
