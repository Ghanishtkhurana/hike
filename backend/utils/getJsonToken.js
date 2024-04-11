const jwt = require("jsonwebtoken");

const getJsonToken = (id, res) => {
  const token = jwt.sign({ _id: id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });

  res.cookie("hike", token, {
    httpOnly: true,
    maxAge: 2 * 24 * 60 * 60 * 1000,
    // sameSite: "none",
  });
};

module.exports = getJsonToken;
