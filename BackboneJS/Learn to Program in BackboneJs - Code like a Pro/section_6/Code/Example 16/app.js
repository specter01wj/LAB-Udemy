Book = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/books/",
	initialize: function(){
		//Define a listener for invalid model detection. The error parameter is passed to the function
		this.on("invalid",function(model,error){
			console.log(error);
		});
	},
	//The defaults are the initial values of your attributes until they are changed by the new model
	defaults: {
		name: 'Book title',
		author: 'No one',
		year: ""
	}
});

var myBook = new Book();
var secondNook = new Book();

function nameHandler(model){
	console.log("The name of the book has changed");
}

function anotherNameHandler(model){
	console.log("This is another name handler");
}

myBook.on("change:name",nameHandler);
myBook.on("change:name",anotherNameHandler);
myBook.on("change:year",anotherNameHandler);

myBook.set("year","The Hunger Games");

myBook.off("change:name",anotherNameHandler);
myBook.off();
myBook.set("name","The Hunger Games");
myBook.set("name","The Gambler");
myBook.set("year",2010);
