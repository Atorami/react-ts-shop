const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  path_img: String,
  title: String,
  descr: String,
  price: Number,
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
