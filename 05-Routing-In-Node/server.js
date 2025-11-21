import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/sapnendra") {
    res.end("<h1>Welcome to the web dev course.</h1>");
  } else if (req.url === "/anjali") {
    res.end("<h1>Welcome to the BCA cuorse.<h1>");
  } else {
    res.end("<h1>Page Not Found.<h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
