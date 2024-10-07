const http = require("http");
const PORT = 8085;

const server = http.createServer((req, res) => {
  console.log("request recieved");
  res.write(`Server started on :: ${PORT}`);
  res.end();
});

server.listen(PORT, () => {
  console.log("The server is listening");
});
