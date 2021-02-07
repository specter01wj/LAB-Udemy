var path = require("path"),
	http = require("http"),
	fs = require("fs"),
	url = require("url"),
	mime = require("mime"),
	server = http.createServer();

var cache = {};

function genericSend(code, message, res){
	res.writeHead(code, {'Content-Type': "text/plain"});
	res.end(message);
};

server.on('request', function(req, res){
	//404, 500, 200
	var urlParams = url.parse(req.url);
	var filename = path.join('.', urlParams.pathname);

	if(cache[filename]){
		res.writeHead(200, {'Content-Type':cache[filename]['Content-Type']});
		res.write(cache[filename].file, 'binary');
		res.end();
	} else {
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
				cache[filename] = {
					'Content-Type': type,
					file: file
				}
			});
		});
	}

});

server.listen(9000);