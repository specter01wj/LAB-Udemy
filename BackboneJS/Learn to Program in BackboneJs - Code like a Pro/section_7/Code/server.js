var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var Twit = require("twit");

var client = null;

function connectToTwitter(){
	client = new Twit({
		consumer_key	      :	"c1tBQAN8cFrAke88TqE4RqTRE",
		consumer_secret	    : "zszzwjNvsW2cadh3gJPSqkVAjzIPSNdAgaZm5VbbUJ9GN4TJI3",
		access_token	      : "3982636277-JsPPVLFB5Tvu6zY6jpXNnHwJ1NWvdLcaAxPV2A2",
		access_token_secret	: "KY3vZXOPJtgkyv5EDrsvfQxt4LYbfv109mer3nGEcXaV6"
	})
}
//Make the client connect to Twitter
connectToTwitter();
//Additional code to allow CORS requests
//additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
	response.header('Access-Control-Allow-Origin', "http://localhost");
	response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	if ('OPTIONS' == req.method) {
		response.send(200);
	}
	else {
		next();
	}
};
app.use(allowCrossDomain);
//Parses the JSON object given in the body request
app.use(bodyParser());
//Return the Twitter timeline of the current user
app.get('/timeline', function (request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	client.get('statuses/home_timeline', {}, function (err, reply) {
		if(err){
		response.send(404);
		}
		if(reply){
			response.json(reply);
		}
	});
});
app.get('/profile', function(request, response){
	response.header('Access-Control-Allow-Origin', '*');
	client.get('users/show', {screen_name: 'ahmed_eduonix'}, function (err, reply) {
		if(err){
			console.log('Error: ' + err);
			response.send(404);
		}
		if(reply){
		/// console.log('Reply: ' + reply);
			response.json(reply);
		}
	});
});
app.get('/search/:query', function (request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	//search term is
	var searchTerm = request.params.query;
	client.get('search/tweets', { q: searchTerm, count: 100 }, function(err, reply) {
		if(err){
			console.log('Error: ' + err);
			response.send(404);
		}
		if(reply){
			// console.log('Reply: ' + reply);
			response.json(reply);
		}
	});
});
app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.sendFile("index.html");
});
//start up the app on port 8080
app.listen(8080);
