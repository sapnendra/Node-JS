import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/LearningNodeJS")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error:", err));

// rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
