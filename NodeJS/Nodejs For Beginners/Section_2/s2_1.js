var http = require("http"),
	url = require("url"),
	server = http.createServer();

server.on('request', function(req, res){
	console.log("--incoming request--");
});

server.listen(9000);