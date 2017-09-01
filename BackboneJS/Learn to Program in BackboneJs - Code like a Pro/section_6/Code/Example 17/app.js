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
	render: function(){
		console.log("Render function called");
	}
});

var myView = new BookView();
myView.listenTo(myBook,"change:name",myView.render);
myBook.set("author","Aurthur Miller");
myView.stopListening();
myBook.set("author","anybody");
