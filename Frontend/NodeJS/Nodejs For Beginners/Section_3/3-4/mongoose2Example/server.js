var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose');

require('./models/user');
require('./models/article');

var	userController = require('./controllers/user');
var	articleController = require('./controllers/article');
var	commentController = require('./controllers/comment');


mongoose.connect('mongodb://localhost/mongooseDemo2')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.set('view engine','ejs');

app.get('/articles',articleController.index);
app.get('/articles/:articleId',articleController.view);
app.post('/articles',articleController.create);
app.put('/articles/:articleId',articleController.update);
app.del('/articles/:articleId',articleController.delete);

// app.get('/articles/:articleId/comments',commentController.index);
app.post('/articles/:articleId',commentController.create);
// app.put('/articles/:articleId/:commentId',commentController.update); //We don't want comment updates
app.del('/articles/:articleId/:commentId',commentController.delete);

app.get('/users',userController.index);
app.post('/users',userController.create);
app.put('/users/:userId',userController.update);
app.del('/users/:userId',userController.delete);

app.param('articleId',articleController.load);
app.param('userId',userController.load);

app.listen(port,function(err) {
	console.log('listening on %s',port);
});