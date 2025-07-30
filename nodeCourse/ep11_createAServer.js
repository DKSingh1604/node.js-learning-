const http = require("node:http");

const server = http.createServer(function (
  req,
  res
) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data.");
  } else {
    res.end("Hello World");
  }
});

server.listen(7777);

/*
Express Js -> Node Js web application server
           -> wrapper on top of node.js to built a server
*/
