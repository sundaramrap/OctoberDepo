const http = require("http");
const PORT = 8084;
const currenciresData = require("./currencies.json");

const server = http.createServer((req, res) => {
  // CREATING A URL LINK FOR THE SERVER TO RECIEVE REQUEST AND SEND REQUEST
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "application/html" });
      res.end("<h1>Currency DataBase</h1>");
      break;
    case "/currencies":
      res.writeHead(200, { "Content-Type": "application/html" });
      res.end(JSON.stringify(currenciresData));
    default:
      break;
  }

  //   console.log("request recieved");
  //   res.write(`Server started on :: ${PORT}`);
  //   res.end();
  //   const infoServer = {
  //     serverName: "P Server",
  //     version: "1.0.0",
  //     currentDate: new Date().toDateString(),
  //     currentTime: new Date().toTimeString(),
  //   };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.write(JSON.stringify(infoServer));
  //   res.end();
});

server.listen(PORT, () => {
  console.log("The server is listening");
});
