const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("Instituto de Computação");
  res.write("passar em prog web");
  res.end();
});
server.listen(3333);
