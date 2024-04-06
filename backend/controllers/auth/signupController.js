const UserModel = require("../../models/users/user.schema");
const bcrypt = require("bcryptjs");
const getJsonToken = require("../../utils/getJsonToken");
let avatarapi = `https://avatar.iran.liara.run/public/`;

const signupController = async (req, res) => {
  try {
    const { full_name, username, password, gender } = req.body;

    const userFinder = await UserModel.findOne({ username });
    if (userFinder) {
      return res
        .status(400)
        .json({ message: "User already exists", status: false });
    }
    let boy = `${avatarapi}boy?username=${username}`;
    let girl = `${avatarapi}girl?username=${username}`;

    console.log("boy", boy);
    const hashPass = await bcrypt.hash(password, 10);
    const createUser = new UserModel({
      full_name,
      username,
      gender,
      profile_pic: gender === "male" ? boy : girl,
      password: hashPass,
    });
    getJsonToken(createUser._id, res);
    await createUser.save();
    return res.status(201).json({
      message: "User created",
      data: {
        full_name,
        username,
        profile: createUser.profile_pic,
      },
      status: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = signupController;
