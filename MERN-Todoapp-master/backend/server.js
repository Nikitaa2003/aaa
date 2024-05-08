const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
const DB_URI = "mongodb://localhost:27017/mydatabase";

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(8000, () => {
    console.log("connected to db & listening on port 8000");
  });
}).catch((error) => {
  console.log("error occured", error);
});
