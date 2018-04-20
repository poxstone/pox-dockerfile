var http = require('http');

var handleRequest = function(request, response) {
  var os = require('os');
  var ifaces = os.networkInterfaces();
  response.writeHead(200);
  response.end("Hello World! "+ os.hostname() + " " + JSON.stringify(ifaces));
}

var www = http.createServer(handleRequest);
www.listen(8080);

