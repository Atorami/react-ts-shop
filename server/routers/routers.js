const express = require("express");
const router = express.Router();

const productsRouter = require("./products");

router.get("/", (req, res) => {
  res.json({
    message: "Hello json",
  });
});

router.use("/products", productsRouter);

module.exports = router;
