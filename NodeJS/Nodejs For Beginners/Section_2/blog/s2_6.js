var express = require("express"),
	app = express();
var logger = require("morgan");
var bodyParser = require('body-parser');
var articles = require('./controllers/articles');

app.use(logger());
app.use(bodyParser());

var posts = [];

var notImplemented = function(req, res){
	res.send(501);
};

app.get('/articles', articles.index);
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented);

app.post('/articles', articles.create);
app.put('/articles/:articleId', notImplemented);
app.del('/articles/:articleId', notImplemented);

app.post('/articles/:articleId/comments', notImplemented);
app.del('/articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080, function(){
	console.log("server is running on 8080!")
});
