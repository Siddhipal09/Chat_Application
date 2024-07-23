const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db1");
const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;
const { chats } = require("./data/data");
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
