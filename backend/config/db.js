const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(process.env.MONGODB);
};

module.exports = connect;
