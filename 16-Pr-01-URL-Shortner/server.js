import express from "express";
import mongoose from "mongoose";
import path from "path";
import { shortUrl, getOriginalUrl } from "./controllers/url.js";

const port = 3000;
const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/LearningNodeJS")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error:", err));

// rendering the ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// Shorting url logic
app.post("/short", shortUrl);

// redirect to original url using short code :- dynamic route
app.get("/:shortCode", getOriginalUrl)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
