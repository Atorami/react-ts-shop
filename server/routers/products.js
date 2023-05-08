const express = require("express");
const router = express.Router();

const product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = new product({
      id: req.body.id,
      path_img: req.body.path_img,
      title: req.body.title,
      descr: req.body.descr,
      price: req.body.price,
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
