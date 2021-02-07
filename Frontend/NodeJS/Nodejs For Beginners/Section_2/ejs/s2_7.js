var express = require("express"),
	app = express();
var logger = require("morgan");
var bodyParser = require('body-parser');

app.use(logger());
app.use(bodyParser());

app.set('view engine', 'ejs');

var posts = [
	{name: 'foo bar'},
	{name: 'baz'}
];

app.get('/posts', function(req, res){
	res.render('posts', {posts:posts});
});
/*
The first one refers to the posts.ejs file
The second one is what we're calling the array in posts.ejs
And the third one is what we're calling the array in server.js.
*/
app.listen(8080, function(){
	console.log("server is running on 8080!")
});
