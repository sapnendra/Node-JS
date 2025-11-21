import express from "express";
import path from "path";

const app = express();
const port = 3000;

const products = [
  { title: "iPhone-11", price: 12000 },
  { title: "iPhone-12", price: 30000 },
  { title: "iPhone-13", price: 45000 },
];

// send res
app.get("/", (req, res) => {
  // res.json({
  //   message: "Fetched all products",
  //   products: products,
  //   success: true,
  // });
  // res.send("<h1> Hello from express. </h1>");
  const dir = path.resolve();
  const url = path.join(dir, "./index.html");
  res.sendFile(url);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
