const express = require("express");
const cors = require("cors");
const launchesRouter = require("./Routes/launches.route");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/launches", launchesRouter);

module.exports = app;
