require("dotenv").config();
const express = require("express");
const cors = require("cors");
const launchesRouter = require("./Routes/launches.route");

const app = express();

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

app.use("/launches", launchesRouter);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
