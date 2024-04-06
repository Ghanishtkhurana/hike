const express = require("express");
const authRouter = require("./auth/router");
const messageRouter = require("./message/router");
const userRouter = require("./users/router");
const allRoutes = express.Router();

allRoutes.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

allRoutes.use("/auth", authRouter);
allRoutes.use("/message", messageRouter);
allRoutes.use("/user", userRouter);

module.exports = allRoutes;
