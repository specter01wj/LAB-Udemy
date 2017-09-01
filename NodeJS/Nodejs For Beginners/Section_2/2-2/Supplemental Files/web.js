var path = require('path'),
	http = require('http'),
	fs = require('fs'),
	url = require('url'),
	mime = require('mime');

var server = http.createServer();

//NEW CODE!
var cache = {};

//genericSend(404,"not found");
function genericSend(code,message,response) {
	response.writeHead(code,{"Content-Type":"text/plain"});
	response.end(message);
};

server.on('request',function(request,response) {
	//possible response codes
	//404
	//500
	//200 OK

	var urlParams = url.parse(request.url),
		// pathname: /index.html ==> index.html
		filename = path.join('.',urlParams.pathname);

	//NEW CODE
	if(cache[filename]) {
		response.writeHead(200,{'Content-Type':cache[filename]['Content-Type']});
		response.write(cache[filename].file,'binary');
		response.end();
	} else {
		path.exists(filename,function(exists) {
			if(!exists)
				return genericSend(404,'not found',response);

			fs.readFile(filename,'binary',function(err,file) {
				if(err)
					return genericSend(500,'internal server error',response);

				var type = mime.lookup(filename);
				response.writeHead(200,{'Content-Type':type});
				response.write(file,'binary');
				response.end();
				//NEW CODE
				cache[filename] = {
					'Content-Type':type,
					file:file
				}
			});
		});
	}
});

server.listen(9000);