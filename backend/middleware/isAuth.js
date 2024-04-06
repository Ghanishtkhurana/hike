const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.hike;
    if (!token) {
      return res.status(401).json({ message: "No Token found", status: false });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ message: "Wrong Token", status: false });
    }
    req.profile = decode;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Error in Authorizing", status: false });
  }
};

module.exports = isAuth;
