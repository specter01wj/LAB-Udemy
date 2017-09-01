var express = require("express"),
	app = express();
var logger = require("morgan");
var bodyParser = require('body-parser');

app.use(logger());
app.use(bodyParser());

app.set('view engine', 'ejs');

var random = ["Jin Wang", "Lebron James", "Steve Jobs", "Chirst Jordan"];

app.get('*', function(req, res){
	res.render('posts', {items:random});
});

app.listen(8080, function(){
	console.log("server is running on 8080!")
});
