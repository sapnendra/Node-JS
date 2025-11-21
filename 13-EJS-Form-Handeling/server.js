import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Your has been submitted",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
