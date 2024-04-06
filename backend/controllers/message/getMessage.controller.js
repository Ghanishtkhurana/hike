const ConversationModel = require("../../models/conversation/conversation.schema");

const getMessageController = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.profile._id;

    const conversation = await ConversationModel.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    return res
      .status(200)
      .json({ message: "Messages", status: true, data: conversation.messages });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = getMessageController;
