const dotenv = require("dotenv").config();
const express = require("express");
const allRoutes = require("./routes/allRoutes");
const connect = require("./config/db");
const app = express();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use("/api", allRoutes);

app.listen(PORT, async () => {
  await connect();
  console.log("Server is running on " + PORT);
});
