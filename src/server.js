const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const userRouter = require("../src/routes/users");
const postRoute = require("../src/routes/posts");
dotenv.config();
const PORT = 9000;
const url = "mongodb://localhost/users";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRoute);

app.listen(PORT, () => {
  console.log("server started");
});
