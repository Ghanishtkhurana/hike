const bcrypt = require("bcryptjs");
const UserModel = require("../../models/users/user.schema");
const getJsonToken = require("../../utils/getJsonToken");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("username", username);
    const userFinder = await UserModel.findOne({ username });
    if (!userFinder) {
      return res.status(400).json({ message: "User not found", status: false });
    }
    const isMatch = await bcrypt.compare(password, userFinder.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect password", status: false });
    }
    getJsonToken(userFinder._id, res);

    let sendObj = {
      _id: userFinder._id,
      username: userFinder.username,
      fullname: userFinder.full_name,
      profilePic: userFinder.profile_pic,
    };
    return res
      .status(200)
      .json({ message: "User logged in", status: true, data: sendObj });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = loginController;
