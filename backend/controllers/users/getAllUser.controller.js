const UserModel = require("../../models/users/user.schema");

const getAllUserController = async (req, res) => {
  try {
    const loggedInUser = req.profile._id;
    const users = await UserModel.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    return res
      .status(200)
      .json({ message: "All users", status: true, data: users });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = getAllUserController;
