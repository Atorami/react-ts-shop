require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routers/routers");

const mongoUser = process.env.MONGO_LOGIN;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoCluster = process.env.MONGO_CLUSTER_URL;

const app = express();

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    app.listen(3000, () => console.log("server starts"));
  } catch (error) {}
};

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/", router);

start();
