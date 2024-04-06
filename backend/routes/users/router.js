const express = require("express");
const getAllUserController = require("../../controllers/users/getAllUser.controller");
const isAuth = require("../../middleware/isAuth");
const userRouter = express.Router();

userRouter.use(isAuth);
userRouter.get("/get_users", getAllUserController);

module.exports = userRouter;
