const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.send("Email already exists");

    const user = new User(
      ({ firstName, lastName, email, password } = req.body)
    );

    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    res.send("error");
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send("Email dose not exist");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
    res.send("Successfully Login ");
  } catch (err) {
    res.send("error");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("error" + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("error" + err);
  }
});
router.post("/", async (req, res) => {
  try {
    const user = new User(
      ({ firstName, lastName, email, password } = req.body)
    );

    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    res.send("error");
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    res.send("error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    const user1 = await user.remove();
  } catch (err) {
    res.send("error");
  }
});
module.exports = router;
