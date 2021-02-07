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

var BookView = Backbone.View.extend({
	el: "div",
	render: function(payload){
		console.log("Custom event raised, payload is " + payload.data);
	}
});

myBook.trigger("change:name",{data:"This is the payload"});

function customHandler(){
	console.log("We have ran out of stock");
}

Backbone.on("myBook:empty",customHandler);


myBook.on("change",function(){
	if (myBook.get("stock") == 0 && myBook.get("reserve") == 0){
		Backbone.trigger("myBook:empty",{});
	}
});
myBook.set("reserve",0);
myBook.set("stock",0);
