const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("connected to db");
  });
};
module.exports = connect;
