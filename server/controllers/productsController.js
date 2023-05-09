const Product = require("../models/Product");

class productsCotroller {
  async getProducts(req, res) {
    try {
      const products = await productsCotroller.find();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async addProduct(req, res) {
    try {
      const newProduct = new Product({
        id: req.body.id,
        path_img: req.body.path_img,
        title: req.body.title,
        descr: req.body.descr,
        price: req.body.price,
      });

      const savedProduct = await newProduct.save();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new productsCotroller();
