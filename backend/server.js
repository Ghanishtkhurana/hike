const dotenv = require("dotenv").config();
const express = require("express");
const allRoutes = require("./routes/allRoutes");
const connect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", allRoutes);

server.listen(PORT, async () => {
  await connect();
  console.log("Server is running on " + PORT);
});
