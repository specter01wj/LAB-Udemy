var express = require("express"),
	app = express();
var logger = require("morgan");

app.use(logger());

app.get("/hello/:person", function(req, res){
	res.send("hello world!" + req.param('person'));
});

app.get("/goodbye", function(req, res){
	res.send("goodbye world!");
});

app.all("*", function(req, res){
	res.send(404);
});

app.listen(8080, function(){
	console.log("server is running on 8080!")
});
