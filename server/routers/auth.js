const express = require("express");
const router = express.Router();

const auth = require("../controllers/authContorller");

// router.get("/", auth.getUsers);
router.post("/registration", auth.registration);

module.exports = router;
