const express = require("express");
const User = require("../models/userSchema");
const userRouter = express.Router();
const bcrypt = require("bcryptjs");

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, secPass) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({ name, email, password: secPass });
        await user.save();
        res.send("registered");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password} = req.body;
  try {
    const user = await User.find({ email });
    const hashed_pass = user[0].password;
    if (user.length > 0) {
      bcrypt.compare(password, hashed_pass, (err, result) => {
        if (result) {
          const token = "abc";
          res.send({ msg: "Login Successfull", token: token });
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRouter;
