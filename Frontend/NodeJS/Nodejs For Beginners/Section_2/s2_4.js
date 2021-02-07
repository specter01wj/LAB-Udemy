var path = require("path"),
	http = require("http"),
	fs = require("fs"),
	url = require("url"),
	mime = require("mime"),
	server = http.createServer();

function genericSend(code, message, res){
	res.writeHead(code, {'Content-Type': "text/plain"});
	res.end(message);
};

server.on('request', function(req, res){
	//404, 500, 200
	var urlParams = url.parse(req.url);
	var filename = path.join('.', urlParams.pathname);

	path.exists(filename, function(exists){
		if(!exists){
			return genericSend(404, 'not found', res);
		}

		fs.readFile(filename, 'binary', function(err, file){
			if(err){
				return genericSend(500, 'internal server error', res);
			}
			var type = mime.lookup(filename);
			res.writeHead(200, {'Content-Type': type});
			res.write(file, 'binary');
			res.end();
		});
	});
});

server.listen(9000);