import express from "express";
import mongoose from "mongoose";
import path from "path";
import { userRegister } from "./controllers/UserController.js";

const app = express();
const port = 3000;

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/LearningNodeJS")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit-data", userRegister)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
