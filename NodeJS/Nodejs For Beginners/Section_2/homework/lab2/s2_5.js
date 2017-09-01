var express = require("express"),
	app = express();
var logger = require("morgan");

app.use(logger());

var quotes = ["James Wang", "Mick Jordan", "Jeff Key"];

app.get("*", function(req, res){
	res.send(quotes[Math.round(Math.random() * (quotes.length - 1))]);
});

app.listen(8080, function(){
	console.log("server is running on 8080!")
});
