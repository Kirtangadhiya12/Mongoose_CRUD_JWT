const express = require("express");
const router = express.Router();
const Verify = require("./verifyToken");
router.get("/", Verify, (req, res) => {
  res.json({
    users: {
      firstName: "saurabh",
      lastName: "tiwary",
      email: "saurabh.tiwary@bacancy.com",
      password: "saurabh@1234",
    },
  });
});
module.exports = router;
