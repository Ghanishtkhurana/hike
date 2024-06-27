const dotenv = require("dotenv").config();
const express = require("express");
const allRoutes = require("./routes/allRoutes");
const connect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");
const path = require("path");

const _dirname = path.resolve();

const corsOptions = {
  origin: ["http://localhost:3000", "https://hike-pearl.vercel.app"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", allRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));

server.listen(PORT, async () => {
  await connect();
  console.log("Server is running on " + PORT);
});
