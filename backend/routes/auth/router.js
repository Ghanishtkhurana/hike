const express = require("express");
const loginController = require("../../controllers/auth/loginController");
const signupController = require("../../controllers/auth/signupController");
const logoutController = require("../../controllers/auth/logoutController");
const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/signup", signupController);
authRouter.post("/logout", logoutController);

module.exports = authRouter;
