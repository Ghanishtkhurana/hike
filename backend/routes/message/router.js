const express = require("express");
const isAuth = require("../../middleware/isAuth");
const sendMessageController = require("../../controllers/message/sendMessage.controller");
const getMessageController = require("../../controllers/message/getMessage.controller");
const messageRouter = express.Router();

messageRouter.use(isAuth);

messageRouter.post("/send_message/:id", sendMessageController);
messageRouter.get("/get_messages/:id", getMessageController);

module.exports = messageRouter;
