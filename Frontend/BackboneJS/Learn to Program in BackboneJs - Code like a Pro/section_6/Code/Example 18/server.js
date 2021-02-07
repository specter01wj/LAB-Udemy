var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//Sample collection. Should be retreived from a database but we are harcording it for the sake of simplicity
var books = [
	{'id':1, name: "The Hunger Games", author: "Suzanne Collins", year: 2008},
	{'id':2, name: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", year: 2003},
	{'id':3, name: "Twilight", author: "Stephenie Meyer", year: 2005},
	{'id':4, name: "Pride and Prejudice", author: "Jane Austen", year: 1813}
]

//Get a book by it's ID
function findBook(id){
	for (var i = 0; i < books.length; i++){
		if (books[i].id === id){
			return {"book":books[i],"index":i};
		}
	}
	return null;
}


//Remove a book by it's ID
function removeBook(id){
	for (var i =0; i < books.length; i++){
		if (books[i].id == id){
			books.splice(i,1);
			break;
		}
	}
}

//Parse the request body (for NODE to understand the request made by the browser)
app.use(bodyParser());


//Routes

app.use(express.static(__dirname));
app.get("/",function(req,res){
	res.sendFile("index.html");
});

//Get a list of all the books
app.get("/books/",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	console.log("Getting all books");
	res.send(books);
});

//Get request to fetch book data with the ID
app.get("/books/:id",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	console.log("Getting a book with the id " + req.params.id);
	var book = findBook(parseInt(req.params.id,10));
	if(book === null){
		res.sendStatus(404);
	} else {
		res.json(book.book);
	}
});

//POST request containing the book you are creating. Returns 200 on succes
app.post('/books/',function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	var book = req.body;
	lastId = books[books.length - 1].id;
	book.id = lastId + 1;
	books.push(book);
	console.log('Saving book with the following structure ' + JSON.stringify(book));
	res.send(book);
});

//PUT request to update the details for a book by specifying it's ID. Returns 404 if the book to be updated does not exist
app.put("/books/:id",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	var book = req.body;
	console.log("Updating Book " + JSON.stringify(book));
	var currentBook = findBook(parseInt(req.params.id,10));
	if (currentBook === null){
		console.log('Could not find book ' + currentBook);
		res.sendStatus(404);
	} else {
		//Save the book to the array
		// currentBook.title = book.title;
		// currentBook.year = book.year;
		// currentBook.author = book.author;
		books[currentBook.index] = book;
		res.send(book);
	}
});

//Delete a book specifying it's ID. Returns 404 if the book to be deleted is not found
app.delete("/books/:id",function(req,res){
	console.log("Calling delete");
	res.header("Access-Control-Allow-Origin","*");
	var book = findBook(parseInt(req.params.id,10));
	if (book === null){
		console.log('Could not find book with ID ' + req.params.id);
		res.sendStatus(404);
	} else {
		console.log("Deleting " + req.params.id);
		removeBook(parseInt(req.params.id,10));
		res.send(book);
		// res.sendStatus(200);
	}
});

//Additional setup to allow CORS requests
var allowCrossDomain = function(req,res,next){
	res.header('Access-Control-Allow-Origin','http://localhost');
	res.header('Access-Control-Allow-Methods','OPTIONS, GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');

	if ('OPTIONS' == req.method){
		res.sendStatus(200);
	} else {
		next();
	}
};

app.use(allowCrossDomain);

//Start the server on port 8080
app.listen(8080);
