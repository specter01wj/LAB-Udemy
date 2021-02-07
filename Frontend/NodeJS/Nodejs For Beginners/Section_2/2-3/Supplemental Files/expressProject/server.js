var express = require('express'),
	app = express();

// '/this/is/a/route' => [action 1]...[action n]
// '/users/me' => looks up my user. renders a profile view

app.use(express.logger());

app.get("/hello/:person",function(req,res) {
	res.send("hello " + req.param('person'));
});

app.get("/goodbye",function(req,res) {
	res.send("goodbye world");
});

//catch all
app.all("*",function(req,res) {
	res.send(404);
});

app.listen(8080,function() {
	console.log("server is running on 8080");
});