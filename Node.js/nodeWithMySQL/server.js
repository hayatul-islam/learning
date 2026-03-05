const http = require("http");
const userRouters = require("./routers/userRouters");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  userRouters(req, res);
});

server.listen(3000, () => {
  console.log("Server running on port:3000");
});
