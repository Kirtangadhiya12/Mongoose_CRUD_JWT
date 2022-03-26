const express = require("express");
const router = express.Router();
const Verify = require("./verifyToken");
router.get("/", Verify, (req, res) => {
  res.json({
    firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
        
  });
});
module.exports = router;
