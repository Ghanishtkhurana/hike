const ConversationModel = require("../../models/conversation/conversation.schema");
const messageModel = require("../../models/message/message.schema");
const { getReciversSocketId, io } = require("../../socket/socket");

const sendMessageController = async (req, res) => {
  try {
    const { id: receiver } = req.params;
    const { message } = req.body;
    console.log("message unn", message);
    const senderId = req.profile._id;

    if (!message && !receiver && !senderId) {
      return res
        .status(400)
        .json({ message: "All fields are required", status: false });
    }
    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiver],
      },
    });

    if (!conversation) {
      conversation = new ConversationModel({
        participants: [senderId, receiver],
      });
    }
    const newMessage = new messageModel({
      message,
      senderId,
      receiverId: receiver,
    });

    console.log("ne m", newMessage);
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    // socket will be implemented here
    const receiverSocId = getReciversSocketId(receiver);

    if (receiverSocId) {
      // ~ io.to(socket.id).emit("event name",date to send)
      io.to(receiverSocId).emit("newMessage", newMessage);
    }

    return res
      .status(201)
      .json({ message: "Message sent", status: true, data: newMessage });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = sendMessageController;
