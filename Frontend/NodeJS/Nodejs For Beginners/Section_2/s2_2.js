var http = require("http"),
	url = require("url"),
	server = http.createServer();

server.on('request', function(req, res){
	console.log("--incoming request--", req.url);
	var incomingUrl = url.parse(req.url, true);
	console.log(incomingUrl);
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World!');
});

server.listen(9000);