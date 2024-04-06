const ConversationModel = require("../../models/conversation/conversation.schema");
const messageModel = require("../../models/message/message.schema");

const sendMessageController = async (req, res) => {
  try {
    const { id: receiver } = req.params;
    const { message } = req.body;
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
    // socket will be implemented here
    await Promise.all([conversation.save(), newMessage.save()]);

    return res
      .status(201)
      .json({ message: "Message sent", status: true, data: newMessage });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = sendMessageController;
