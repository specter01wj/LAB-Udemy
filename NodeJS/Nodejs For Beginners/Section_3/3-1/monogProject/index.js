//connect to monogo
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/myExample',function(err,db) {
	if(err) return console.log(err);
	console.log('mongodb connected');
	//insert document (row) into collection (table)
	var collection = db.collection('users');
	collection.insert({name:'zeke'},function(err,docs) {
		if(err) return console.log(err);
		console.log(docs);

		//query that collection
		collection.find().toArray(function(err,users) {
			if(err) return console.log(err);
			console.log(users);
		});
	});
});

