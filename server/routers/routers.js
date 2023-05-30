const express = require("express");
const router = express.Router();

const productsRouter = require("./products");
const rolesRouter = require("./auth");

router.get("/", (req, res) => {
  res.json({
    message: "Hello json",
  });
});

router.use("/products", productsRouter);
router.use("/auth", rolesRouter);

module.exports = router;
