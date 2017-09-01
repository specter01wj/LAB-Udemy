var express = require('express'),
	app = express(),
	articles = require('./controllers/articles');

//CRUD
//CREATE READ UPDATE DELETE

/*
	a post is going to look like this:
	{
		title:"",
		body:"",
		author:"",
		comments:[]
	}

	a comment would like
	{
		name:"foo",
		text:"asdflkjdfskldfs"
	}
*/

app.use(express.logger());
app.use(express.bodyParser());

var notImplimented = function(req,res) {
	res.send(501)
}

//articles
app.get('/articles',articles.index); // show them all blog posts
app.get('/articles/new',articles.new);
app.get('/articles/:articleId',notImplimented); // reading one
app.post('/articles',articles.create); //making a new one
app.put('/article/:articleId',notImplimented); //updating one
app.del('/article/:articleId',notImplimented); //deleting one

//comments
app.post('/articles/:articleId/comments',notImplimented);
app.del('/articles/:articleId/comments/:commentId',notImplimented);


app.listen(8080);