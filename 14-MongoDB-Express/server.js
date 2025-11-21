import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/LearningNodeJS")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
