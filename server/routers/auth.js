const express = require("express");
const router = express.Router();

const auth = require("../controllers/authContorller");

router.get("/", auth.getUsers);

module.exports = router;
