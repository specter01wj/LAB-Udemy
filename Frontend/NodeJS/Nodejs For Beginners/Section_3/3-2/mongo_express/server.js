//getting dependencies and config vars setup
var express = require('express'),
	app = express(),
	port = 8080,
	MongoClient = require('mongodb').MongoClient;


//defining express middleware
app.use(express.bodyParser()); 						//converts request bodys from foo=bar&baz=fluf to
													//{foo:'bar',baz:'fluf'}

app.use(express.logger());							//enables logging of requests

app.use(express.static(__dirname + '/public'));		//establishes static file server on public dir

app.set('view engine', 'ejs');						//sets view engine to EJS (default is jade)

MongoClient.connect('mongodb://127.0.0.1:27017/myExample',function(err,db) {
	if(err) throw err;
	var collection = db.collection('members');

	var index = function(req,res) {
		/*render the index view, and pass it members*/
		collection.find().toArray(function(err,members) {
			res.render('index',{members:members});
		});
	};
	var addMember = function(req,res) {
		//request body
		//{name:"whatever they typed"}
		collection.insert(req.body,function(err,docs) {
			console.log(docs);
			res.redirect('/members')
		});
	};

	app.get('/members',index);				//list all members
	app.post('/members',addMember);			//add a new member

	app.listen(port);
	console.log('server on %s',port);
});


process.on('uncaughtException',function(e) {
	throw e;
});




